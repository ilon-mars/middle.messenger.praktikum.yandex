import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Header } from '@/pages/ChatPage/modules/ChatSection/Header';
import { Footer } from '@/pages/ChatPage/modules/ChatSection/Footer';
// import { Message } from '@/pages/chatPage/modules/Message';

// import { MESSAGES, normalizeChatMessage } from '@/utils';

import $style from './index.module.sass';

export class ChatSection extends Block {
  constructor() {
    super('div', {
      classes: [$style.container],
      $style,
    });
  }

  init() {
    this.children.header = new Header();
    this.children.footer = new Footer();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
