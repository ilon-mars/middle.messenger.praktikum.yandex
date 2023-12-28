import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageForm } from '@/components/Form';
import { MessageInput } from '@/components/Input';
import { DefaultButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

import { onSubmitHandler } from '@/utils';

import $style from './index.module.sass';

export class Footer extends Block {
  constructor() {
    super({ $style });
  }

  init() {
    this.children.form = new MessageForm({
      events: {
        submit: e => {
          const form = this.children.form as MessageForm;

          onSubmitHandler({ e, form, callback: () => {} });

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
