import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { LinkProps } from '@/types';

import $style from './index.module.sass';

export class Link extends Block {
  constructor(props: LinkProps, className: string = '') {
    super('a', {
      ...props,
      classes: [$style.link, $style[className]],
      attrs: [{ href: props.to }],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
