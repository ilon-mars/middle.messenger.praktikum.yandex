import { Input } from '@/components/Input/Input.ts';

import { InputField, InputProps } from '@/types/index.ts';
import { startsWithUpperCase } from '@/utils/index.ts';

export class NameInput extends Input {
  validations = {
    pattern: new RegExp(/^[А-я-]+|[A-z-]+$/i),
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: { ...props.attrs, type: 'text' },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && startsWithUpperCase(field.value);
  }
}
