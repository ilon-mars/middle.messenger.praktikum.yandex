import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { ChatListProps } from '@/types/index.ts';
import { isEqual } from '@/utils/index.ts';

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

  componentShouldUpdate(oldProps: ChatListProps, newProps: ChatListProps) {
    this.children.chats = newProps.chats;
    return !isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
