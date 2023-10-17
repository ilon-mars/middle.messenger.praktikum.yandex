import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import $style from './index.module.sass';

export class WindowStub extends Block {
  constructor() {
    super('div', { classes: [$style.container] });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
