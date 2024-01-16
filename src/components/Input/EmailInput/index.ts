import { Input } from '@/components/Input/Input.ts';

import { InputField, InputProps } from '@/types/index.ts';
import { EMAIL_INPUT } from '@/utils/index.ts';

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
