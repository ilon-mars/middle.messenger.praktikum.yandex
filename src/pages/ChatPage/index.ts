import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { WindowStub } from '@/pages/ChatPage/modules/WindowStub';
import { ChatSection } from '@/pages/ChatPage/modules/ChatSection';

import { ChatPageProps } from '@/types';

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super('section', {
      ...props,
      classes: ['chat-window'],
    });
  }

  init() {
    this.children.content = this.props.isChatSelected ? new ChatSection() : new WindowStub();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
