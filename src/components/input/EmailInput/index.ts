import { Input } from '@/components/Input/Input';

import { InputProps, InputField } from '@/types';
import { EMAIL_INPUT } from '@/utils';

export class EmailInput extends Input {
  validations = {
    pattern: new RegExp(/[\w-.]+@([\w-]+\.)+[\w-]{2,4}/),
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        name: EMAIL_INPUT.name,
        type: EMAIL_INPUT.type,
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value);
  }
}
