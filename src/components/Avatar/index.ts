import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { AvatarProps } from '@/types/index.ts';

import $style from './index.module.sass';

import avatarSrc from '@/assets/icons/avatar-stub.svg';

export class Avatar extends Block {
  constructor(props?: AvatarProps, className: string = '') {
    super({
      ...props,
      classes: [$style[className]],
      ...(!props?.src && { src: avatarSrc }),
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
