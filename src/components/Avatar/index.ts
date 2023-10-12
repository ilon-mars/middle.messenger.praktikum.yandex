import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { AvatarProps } from '@/types';

import $style from './index.module.sass';

export class Avatar extends Block {
  constructor(props: AvatarProps, className: string = '') {
    super('div', {
      ...props,
      classes: [$style.avatar, $style[className]],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
