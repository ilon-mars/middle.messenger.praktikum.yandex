import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { MessageProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class Message extends Block {
  constructor(props: MessageProps) {
    super({
      ...props,
      classes: [props.isMe ? $style.me : $style.other],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
