import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ChatItemProps } from '@/types';

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
