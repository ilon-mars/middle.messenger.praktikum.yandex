import { Block } from '@/core/Block';
import store from '@/core/Store';

import { tmpl } from './index.tmpl';

import { MessageForm } from '@/components/Form';
import { MessageInput } from '@/components/Input';
import { DefaultButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

import MessageController from '@/controllers/MessageController';

import { onSubmitHandler } from '@/utils';
import { ID } from '@/types';

import $style from './index.module.sass';

const sendMessage = (chatId: ID, message: string) => {
  MessageController.sendMessage(chatId, message);
};

export class Footer extends Block {
  constructor() {
    super({ $style });
  }

  init() {
    this.children.form = new MessageForm({
      events: {
        submit: e => {
          const form = this.children.form as MessageForm;

          onSubmitHandler({
            e,
            form,
            callback: ({ message }) => {
              sendMessage(store.state.selectedChat!.id, message);
            },
          });

          ((form.children.messageInput as MessageInput).element! as HTMLTextAreaElement).value = '';
        },
      },
    });

    this.children.attachButton = new DefaultButton(
      {
        hasText: false,
        icon: new Icon({ name: 'clip' }),
      },
      $style.attachButton,
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
