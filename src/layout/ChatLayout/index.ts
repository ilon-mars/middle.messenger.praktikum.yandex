import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { ChatSidebar } from '@/pages/ChatPage/modules/ChatSidebar';
import { ChatPage } from '@/pages/ChatPage';

export class ChatLayout extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.list = new ChatSidebar();
    this.children.window = new ChatPage({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
