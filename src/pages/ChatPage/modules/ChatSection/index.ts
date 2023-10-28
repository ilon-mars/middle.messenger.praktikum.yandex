import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Header } from '@/pages/ChatPage/modules/ChatSection/Header';
import { Footer } from '@/pages/ChatPage/modules/ChatSection/Footer';
import { Message } from '@/pages/ChatPage/modules/Message';

import { MESSAGES, normalizeChatMessage } from '@/utils';

import $style from './index.module.sass';

export class ChatSection extends Block {
  constructor() {
    super($style);
  }

  init() {
    this.children.header = new Header();
    this.children.footer = new Footer();
    this.children.messages = MESSAGES.map(message => new Message(normalizeChatMessage(message)));
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
