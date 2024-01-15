import { Block } from '@/core/Block/index.ts';
import router from '@/core/Router/index.ts';

import { tmpl } from './index.tmpl.ts';

import $style from './index.module.sass';

export class GoBack extends Block {
  constructor() {
    super({ $style });
  }

  init() {
    this.setProps({
      events: {
        click: () => router.back(),
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
