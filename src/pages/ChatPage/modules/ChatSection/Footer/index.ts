import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageForm } from '@/components/Form';
import { MessageInput } from '@/components/Input';
import { Icon } from '@/components/Icon';

import { onSubmitHandler } from '@/utils';

import $style from './index.module.sass';

export class Footer extends Block {
  constructor() {
    super($style);
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

    this.children.attachIcon = new Icon({ name: 'clip' });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
