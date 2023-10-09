import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { LinkProps } from '@/types';

import $style from './index.module.sass';

export class Link extends Block {
  constructor(props: LinkProps) {
    super('button', { ...props, classes: [$style.link], $style });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
