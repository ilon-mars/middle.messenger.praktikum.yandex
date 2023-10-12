import { Block } from '@/core/Block';

import { MessageInputProps, InputField } from '@/types';

export class MessageInput extends Block {
  constructor(props: MessageInputProps, $style: CSSModuleClasses) {
    super('textarea', {
      ...props,
      classes: [$style.messageInput],
      attrs: {
        name: 'message',
        placeholder: 'Сообщение',
      },
      $style,
    });
  }

  render() {
    return this.compile('{{value}}', this.props);
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = !!field.value;
  }
}
