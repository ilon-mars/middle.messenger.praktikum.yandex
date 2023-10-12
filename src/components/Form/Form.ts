import { Block } from '@/core/Block';

import { InputField, FormProps } from '@/types';

export class Form extends Block {
  formData: Record<string, InputField> | undefined;

  constructor(props: FormProps) {
    super('form', props);
  }
}
