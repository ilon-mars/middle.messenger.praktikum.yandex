import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ChatList } from '@/pages/ChatPage/modules/ChatList';
import { ChatPage } from '@/pages/ChatPage';

import { ChatPageProps } from '@/types';

export class ChatLayout extends Block {
  constructor(props: ChatPageProps) {
    super(props);
  }

  init() {
    this.children.list = new ChatList();
    this.children.window = new ChatPage(this.props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
