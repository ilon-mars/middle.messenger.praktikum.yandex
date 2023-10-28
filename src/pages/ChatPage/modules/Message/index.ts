import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageProps } from '@/types';

import $style from './index.module.sass';

export class Message extends Block {
  constructor(props: MessageProps) {
    super({
      ...props,
      classes: [props.isSender ? $style.sender : $style.receiver, props.imageLink && $style.imageWrapper],
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
