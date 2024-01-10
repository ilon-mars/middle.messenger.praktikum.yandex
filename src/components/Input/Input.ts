import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { InputField, InputProps } from '@/types/index.ts';

import $style from './index.module.sass';

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      $style,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  // метод будет перезаписан
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  checkField(_value: string, _field: InputField) {}

  resetField(field: InputField) {
    field.value = '';
    field.isValid = false;
  }
}
