import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { ChatPage } from '@/pages/ChatPage/index.ts';
import { ChatSidebar } from '@/pages/ChatPage/modules/ChatSidebar/index.ts';

export class ChatLayout extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.list = new ChatSidebar({});
    this.children.window = new ChatPage({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
