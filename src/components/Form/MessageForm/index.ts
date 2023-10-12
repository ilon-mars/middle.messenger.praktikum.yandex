import { tmpl } from './index.tmpl';

import { Form } from '@/components/Form/Form';
import { Input, MessageInput } from '@/components/Input';

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
      classes: [$style.form],
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
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
