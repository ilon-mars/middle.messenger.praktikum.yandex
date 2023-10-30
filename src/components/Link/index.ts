import { Block } from '@/core/Block';
import router from '@/core/Router';

import { tmpl } from './index.tmpl';

import { LinkProps } from '@/types';

import $style from './index.module.sass';

export class Link extends Block {
  constructor(props: LinkProps, className: string = '') {
    super({
      ...props,
      classes: [$style[className]],
      $style,
    });
  }

  init() {
    this.setProps({
      events: {
        click: () => router.go(this.props.to),
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
