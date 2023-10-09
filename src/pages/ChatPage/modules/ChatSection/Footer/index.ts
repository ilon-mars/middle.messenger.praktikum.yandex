import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageInput } from '@/components/Input';

import $style from './index.module.sass';

export class Footer extends Block {
  constructor() {
    super('footer', {
      classes: [$style.footer],
      $style,
    });
  }

  init() {
    this.children.messageInput = new MessageInput({ name: 'message' }, $style);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
