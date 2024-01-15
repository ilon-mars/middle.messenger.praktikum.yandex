import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { ChatItemProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super({
      ...props,
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
