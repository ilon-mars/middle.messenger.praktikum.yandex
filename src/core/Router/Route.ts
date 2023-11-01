import { Block } from '../Block';
import { createApp as render } from '../createApp';

const isEqual = (lhs: string, rhs: string) => {
  return lhs === rhs;
};

export default class Route {
  #pathname: string;
  #block: Block | null = null;
  readonly #blockClass: typeof Block | Block;
  readonly #query: string;

  constructor(pathname: string, view: typeof Block | Block, query: string) {
    this.#pathname = pathname;
    this.#blockClass = view;
    this.#query = query;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.#pathname = pathname;
      this.render();
    }
  }

  leave() {
    this.#block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.#pathname);
  }

  render() {
    if (!this.#block) {
      this.#block = this.#blockClass instanceof Block ? this.#blockClass : new this.#blockClass({});
      render(this.#query, this.#block!);

      return;
    }
  }
}
