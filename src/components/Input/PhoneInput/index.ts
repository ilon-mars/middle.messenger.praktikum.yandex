import { Input } from '@/components/Input/Input';

import { InputProps, InputField } from '@/types';
import { PHONE_INPUT, inRange } from '@/utils';

export class PhoneInput extends Input {
  validations = {
    pattern: new RegExp(/^[+]?\d+$/),
    range: [10, 15] as [number, number],
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        name: PHONE_INPUT.name,
        type: PHONE_INPUT.type,
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && inRange(field.value, this.validations.range);
  }
}
