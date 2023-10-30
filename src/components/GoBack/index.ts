import { Block } from '@/core/Block';
import router from '@/core/Router';

import { tmpl } from './index.tmpl';

import { Icon } from '@/components/Icon';

import { RedirectTo } from '@/types';

import $style from './index.module.sass';

export class GoBack extends Block {
  constructor(props: { to: RedirectTo }) {
    super({
      ...props,
      $style,
    });
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
