import { Block } from '@/core/Block';

import { InputProps, InputField } from '@/types';

import $style from './index.module.sass';

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', {
      ...props,
      classes: [$style.input],
      $style,
    });
  }

  render() {
    return this.compile('', this.props);
  }

  // метод будет перезаписан
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  checkField(_value: string, _field: InputField) {}

  resetField(field: InputField) {
    field.value = '';
    field.isValid = false;
  }
}
