/* eslint-disable @typescript-eslint/no-unused-vars */
import { Block } from '@/core/Block';
import store, { State, withStore } from '@/core/Store';

import { tmpl } from './index.tmpl';

import { Header } from '@/pages/ChatPage/modules/ChatSection/Header';
import { Footer } from '@/pages/ChatPage/modules/ChatSection/Footer';
import { Message } from '@/pages/ChatPage/modules/Message';

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
