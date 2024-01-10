import { Input } from '@/components/Input/Input.ts';

import { InputField, InputProps } from '@/types/index.ts';
import { PASSWORD_INPUT, inRange } from '@/utils/index.ts';

export class PasswordInput extends Input {
  validations = {
    pattern: new RegExp(/(?=.*[A-ZА-Я])(?=.*\d)/),
    range: [8, 40] as [number, number],
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        ...props.attrs,
        type: PASSWORD_INPUT.type,
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && inRange(field.value, this.validations.range);
  }
}
