import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MessageInputProps, InputField } from '@/types';

export class MessageInput extends Block {
  constructor(props: MessageInputProps, $style: CSSModuleClasses) {
    super({
      ...props,
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = !!field.value;
  }
}
