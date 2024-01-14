import { Block } from '@/core/Block/index.ts';
import store from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { DefaultButton } from '@/components/Button/index.ts';
import { MessageForm } from '@/components/Form/index.ts';
import { MessageInput } from '@/components/Input/index.ts';

import MessageController from '@/controllers/MessageController.ts';

import { ID } from '@/types/index.ts';
import { onSubmitHandler } from '@/utils/index.ts';

import $style from './index.module.sass';

import clipIcon from '@/assets/icons/clip.svg';

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
            callback: ({ message }: { message: string }) => {
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
        icon: clipIcon(),
      },
      $style.attachButton,
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
