import { Block } from '@/core/Block';

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

  render() {
    return this.compile(tmpl, this.props);
  }
}
