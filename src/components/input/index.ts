import { Block } from '@/core/Block';

import { baseInputTmpl } from './index.tmpl';

import { InputProps, SearchInputProps, MessageInputProps } from '@/types';
import { EMAIL_INPUT, LOGIN_INPUT, PASSWORD_INPUT, PHONE_INPUT, inRange, startsWithUpperCase } from '@/utils';

import $style from './index.module.sass';

export class Input extends Block {
  constructor(props: InputProps, className: string = '') {
    super('div', {
      ...props,
      classes: [$style.field, className],
      $style,
    });
  }

  init() {
    const inputNode = this.element?.querySelector('input');
    if (inputNode) {
      inputNode.value = this.props.value || '';
    }
  }

  render() {
    return this.compile(baseInputTmpl, this.props);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  checkField(_target: HTMLInputElement, _field: { value: string; isValid: boolean }) {}
}

export class NameInput extends Input {
  #validations = {
    pattern: new RegExp(/^[А-я-]+|[A-z-]+$/i),
  };

  constructor(props: InputProps, className: string = '') {
    super({ ...props, type: 'text' }, className);
  }

  checkField(target: HTMLInputElement, field: { value: string; isValid: boolean }) {
    field.value = (target as HTMLInputElement).value;
    field.isValid = this.#validations.pattern.test(field.value) && startsWithUpperCase(field.value);
  }
}

export class LoginInput extends Input {
  #validations = {
    pattern: new RegExp(/^(?=.*[A-z])[0-9A-z_-]+$/),
    range: [3, 20] as [number, number],
  };

  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: LOGIN_INPUT.name, type: 'text' }, className);
  }

  checkField(target: HTMLInputElement, field: { value: string; isValid: boolean }) {
    field.value = (target as HTMLInputElement).value;
    field.isValid = this.#validations.pattern.test(field.value) && inRange(field.value, this.#validations.range);
  }
}

export class PasswordInput extends Input {
  #validations = {
    pattern: new RegExp(/(?=.*[A-ZА-Я])(?=.*\d)/),
    range: [8, 40] as [number, number],
  };

  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: PASSWORD_INPUT.name, type: PASSWORD_INPUT.type }, className);
  }

  checkField(target: HTMLInputElement, field: { value: string; isValid: boolean }) {
    field.value = (target as HTMLInputElement).value;
    field.isValid = this.#validations.pattern.test(field.value) && inRange(field.value, this.#validations.range);
  }
}

export class EmailInput extends Input {
  #validations = {
    pattern: new RegExp(/[\w-.]+@([\w-]+\.)+[\w-]{2,4}/),
  };

  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: EMAIL_INPUT.name, type: EMAIL_INPUT.type }, className);
  }

  checkField(target: HTMLInputElement, field: { value: string; isValid: boolean }) {
    field.value = (target as HTMLInputElement).value;
    field.isValid = this.#validations.pattern.test(field.value);
  }
}

export class PhoneInput extends Input {
  #validations = {
    pattern: new RegExp(/^[+]?\d+$/),
    range: [10, 15] as [number, number],
  };

  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: PHONE_INPUT.name, type: PHONE_INPUT.type }, className);
  }

  checkField(target: HTMLInputElement, field: { value: string; isValid: boolean }) {
    field.value = (target as HTMLInputElement).value;
    field.isValid = this.#validations.pattern.test(field.value) && inRange(field.value, this.#validations.range);
  }
}

export class SearchInput extends Block {
  constructor(props: SearchInputProps, $style: CSSModuleClasses) {
    super('input', {
      ...props,
      classes: [$style.search],
      attrs: {
        placeholder: 'Поиск',
        name: 'search',
        type: 'search',
      },
      $style,
    });
  }

  init() {
    (this.element! as HTMLInputElement).value = this.props.value || '';
  }

  render() {
    return this.compile('', this.props);
  }
}

export class MessageInput extends Block {
  constructor(props: MessageInputProps, $style: CSSModuleClasses) {
    super('textarea', {
      ...props,
      classes: [$style.messageInput],
      attrs: {
        name: 'message',
        placeholder: 'Сообщение',
      },
      $style,
    });
  }

  render() {
    return this.compile('{{value}}', this.props);
  }
}
