import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ChatListProps } from '@/types';
import { isEqual } from '@/utils';

import $style from './index.module.sass';

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.chats = this.props.chats;
  }

  componentShouldUpdate(oldProps: ChatListProps, newProps: ChatListProps): boolean {
    this.children.chats = newProps.chats;
    return !isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
