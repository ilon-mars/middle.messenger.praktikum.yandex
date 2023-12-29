import { tmpl } from './index.tmpl';

import { Form } from '@/components/Form/Form';
import { Input, MessageInput } from '@/components/Input';
import { MainButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

import { FormProps, InputField } from '@/types';
import { onBlurHandler, onInputHandler } from '@/utils';

import $style from './index.module.sass';

export class MessageForm extends Form {
  formData: Record<string, InputField> = {
    message: {
      value: '',
      isValid: false,
    },
  };

  constructor(props: FormProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.messageInput = new MessageInput(
      {
        value: '',
        events: {
          blur: e => onBlurHandler(e, this.children.messageInput as Input, this.formData.message, $style.error),
          input: e => onInputHandler(e, this.children.messageInput as Input, this.formData.message, $style.error),
        },
      },
      $style,
    );

    this.children.sendButton = new MainButton(
      {
        hasText: false,
        icon: new Icon({ name: 'arrow-tail' }),
      },
      $style.sendButton,
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
