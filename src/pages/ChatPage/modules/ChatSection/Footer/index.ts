import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageForm } from '@/components/Form';
import { MessageInput } from '@/components/Input';

import { onSubmitHandler } from '@/utils';

import $style from './index.module.sass';

export class Footer extends Block {
  constructor() {
    super('footer', {
      classes: [$style.footer],
      $style,
    });
  }

  init() {
    this.children.form = new MessageForm({
      events: {
        submit: e => {
          const form = this.children.form as MessageForm;

          onSubmitHandler(e, form);

          ((form.children.messageInput as MessageInput).element! as HTMLTextAreaElement).value = '';
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
