import { Block } from '@/core/Block';
import router from '@/core/Router';

import { tmpl } from './index.tmpl';

import { Icon } from '@/components/Icon';

import $style from './index.module.sass';

export class GoBack extends Block {
  constructor() {
    super({ $style });
  }

  init() {
    this.children.icon = new Icon({ name: 'arrow' });
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
