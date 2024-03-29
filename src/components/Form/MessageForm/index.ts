import { tmpl } from './index.tmpl.ts';

import { MainButton } from '@/components/Button/index.ts';
import { Form } from '@/components/Form/Form.ts';
import { Input } from '@/components/Input/Input.ts';
import { MessageInput } from '@/components/Input/index.ts';

import { FormProps, InputField } from '@/types/index.ts';
import { onBlurHandler, onInputHandler } from '@/utils/index.ts';

import $style from './index.module.sass';

import arrowTailIcon from '@/assets/icons/arrow-tail.svg';

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
        icon: arrowTailIcon,
      },
      $style.sendButton,
    );
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
