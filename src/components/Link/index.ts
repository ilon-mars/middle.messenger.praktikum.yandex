import { Block } from '@/core/Block/index.ts';
import router from '@/core/Router/index.ts';

import { tmpl } from './index.tmpl.ts';

import { RouteLink } from '@/types/index.ts';

import $style from './index.module.sass';

export class Link extends Block {
  constructor(props: RouteLink, className: string = '') {
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
