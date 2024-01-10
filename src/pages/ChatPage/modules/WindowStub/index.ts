import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import $style from './index.module.sass';

export class WindowStub extends Block {
  constructor() {
    super({ $style });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
