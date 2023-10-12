import { Input } from '@/components/Input/Input';

import { InputProps, InputField } from '@/types';
import { startsWithUpperCase } from '@/utils';

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
