import { Block } from '@/core/Block/index.ts';

import { FormProps, InputField } from '@/types/index.ts';

export abstract class Form extends Block {
  formData: Record<string, InputField> | undefined;

  constructor(props: FormProps) {
    super(props);
  }
}
