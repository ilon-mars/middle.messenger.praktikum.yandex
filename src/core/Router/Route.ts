import { Block } from '@/core/Block/index.ts';
import { createApp as render } from '@/core/createApp.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlockWithStore<T extends Record<string, any> = any> = {
  new (props: T): Block<T>;
};

const isEqual = (lhs: string, rhs: string) => {
  return lhs === rhs;
};

export default class Route {
  #pathname: string;
  #block: Block | null = null;
  readonly #blockClass: BlockWithStore | Block;
  readonly #query: string;

  constructor(pathname: string, view: BlockWithStore | Block, query: string) {
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
