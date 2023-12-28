import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
import { Input } from '@/components/Input';

import ChatController from '@/controllers/ChatController';

import { ModalProps } from '@/types';
import { ADD_CHAT } from '@/utils';

import $style from './index.module.sass';

export class AddChatModal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.button = new MainButton({
      ...ADD_CHAT,
      events: {
        click: async e => {
          e?.preventDefault();

          ChatController.createChat(((this.children.input as Block).element! as HTMLInputElement).value);
          this.hide();
          ((this.children.input as Block).element! as HTMLInputElement).value = '';
        },
      },
    });

    this.children.input = new Input({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
