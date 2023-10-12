import { Input } from '@/components/Input/Input';

import { InputProps, InputField } from '@/types';
import { LOGIN_INPUT, inRange } from '@/utils';

export class LoginInput extends Input {
  validations = {
    pattern: new RegExp(/^(?=.*[A-z])[0-9A-z_-]+$/),
    range: [3, 20] as [number, number],
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        name: LOGIN_INPUT.name,
        type: 'text',
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && inRange(field.value, this.validations.range);
  }
}
