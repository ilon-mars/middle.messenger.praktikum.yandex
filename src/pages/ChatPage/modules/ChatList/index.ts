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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentShouldUpdate(oldProps: any, newProps: any): boolean {
    this.children.chats = (newProps as ChatListProps).chats;
    return !isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
