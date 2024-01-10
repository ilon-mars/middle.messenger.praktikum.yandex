import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { Footer } from '@/pages/ChatPage/modules/ChatSection/Footer/index.ts';
import { Header } from '@/pages/ChatPage/modules/ChatSection/Header/index.ts';
import { Message } from '@/pages/ChatPage/modules/Message/index.ts';

import $style from './index.module.sass';

export class ChatSection extends Block {
  constructor(props: { messages: Message[] | string }) {
    super({ ...props, $style });
  }

  init() {
    this.children.header = new Header();
    this.children.footer = new Footer();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
