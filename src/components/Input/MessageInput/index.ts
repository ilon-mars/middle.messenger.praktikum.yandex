import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { InputField, MessageInputProps } from '@/types/index.ts';

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
