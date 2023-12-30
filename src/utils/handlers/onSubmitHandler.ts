import { Form } from '@/components/Form';
import { Input, InputWithLabel } from '@/components/Input';

import { InputField } from '@/types';
import { errorClassHandler } from '@/utils';

import $wrapperStyle from '@/components/Input/InputWithLabel/index.module.sass';

const normalizeData = <T>(data: Record<string, InputField>): T => {
  return Object.keys(data).reduce((acc, current) => {
    return {
      ...acc,
      [current]: data[current].value,
    };
  }, {} as T);
};

type SubmitHandlerArgs<T> = {
  e: Event | undefined;
  form: Form;
  callback: (data: T) => void | Promise<void>;
  shouldResetForm?: boolean;
};

export const onSubmitHandler = async <T>({ e, form, callback, shouldResetForm = true }: SubmitHandlerArgs<T>) => {
  if (!e) {
    return;
  }

  e.preventDefault();

  const data = form.formData as Record<string, InputField>;
  const isValid = !Object.values(data).filter(item => !item.isValid).length;

  const inputs = Object.values(form.children)
    .map(child => child instanceof InputWithLabel && child.children.input)
    .filter(value => value);

  inputs.forEach(input => {
    const inputEl = input as Input;
    const $el = inputEl.element as HTMLInputElement | HTMLTextAreaElement;

    const value = $el.value;
    const field = data[$el.name];

    inputEl.checkField(value, field);

    errorClassHandler(field, inputEl.element!.parentElement!, $wrapperStyle.error);
  });

  if (isValid) {
    console.log('%cSend', 'background: #242424; color: #FE5F05; padding: 4px 1px', normalizeData(data));
    await callback(normalizeData(data));

    if (shouldResetForm) {
      inputs.forEach(input => {
        const inputEl = input as Input;
        const $el = inputEl.element as HTMLInputElement | HTMLTextAreaElement;
        const field = form.formData![$el.name];

        inputEl.resetField(field);
      });

      (form.element as HTMLFormElement).reset();
    }
  }
};
