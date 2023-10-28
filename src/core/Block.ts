import Handlebars from 'handlebars';
import { v4 as uuid } from 'uuid';

import { EventBus } from './EventBus';

// может быть любая структура
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Block<T extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CSU: 'flow:component-should-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = uuid();
  public children: Record<string, Block | Block[]>;

  protected props: T;

  #eventBus: () => EventBus;
  #element: HTMLElement | null = null;

  constructor(propsWithChildren: T) {
    const eventBus = new EventBus();

    const { props, children } = this.#getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this.#makePropsProxy(props);

    this.#eventBus = () => eventBus;

    this.#registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  #getChildrenAndProps(childrenAndProps: T): { props: T; children: Record<string, Block | Block[]> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0 && value.every(item => item instanceof Block)) {
        children[key as string] = value;
      } else if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as T, children };
  }

  #addEvents() {
    const { events = {} } = this.props as T & { events: Record<string, () => void> };

    Object.keys(events).forEach(eventName => {
      this.#element?.addEventListener(eventName, events[eventName]);
    });
  }

  #removeEvents() {
    const { events = {} } = this.props as T & { events: Record<string, () => void> };

    Object.keys(events).forEach(eventName => {
      this.#element?.removeEventListener(eventName, events[eventName]);
    });
  }

  #registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.#init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CSU, this.#componentShouldUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.#render.bind(this));
  }

  #init() {
    this.init();

    this.#eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  #componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.#eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(item => item.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  #componentShouldUpdate(oldProps: T, newProps: T) {
    if (this.componentShouldUpdate(oldProps, newProps)) {
      this.#eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // метод будет перезаписан
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected componentShouldUpdate(_oldProps: T, _newProps: T) {
    return true;
  }

  setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this.#element;
  }

  #render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this.props.classes && this.props.classes.length) {
      const classes: string = this.props.classes.filter((item: string) => item);
      newElement.classList.add(...classes);
    }

    if (this.props.attrs && Object.keys(this.props.attrs).length) {
      Object.entries(this.props.attrs).forEach(([name, value]) => {
        newElement.setAttribute(name, value as string);
      });
    }

    this.#removeEvents();

    if (this.#element && newElement) {
      this.#element.replaceWith(newElement);
    }

    this.#element = newElement;

    this.#addEvents();
  }

  // может быть любая структура
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected compile(template: string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map(child => `<div data-id="${child.id}"></div>`).join('');
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    };

    // не нужен первый параметр
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  #makePropsProxy(props: T) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof T] = value;

        self.#eventBus().emit(Block.EVENTS.FLOW_CSU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }

  instance() {
    return this.constructor;
  }
}
