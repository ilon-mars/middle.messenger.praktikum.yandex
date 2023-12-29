import { Form } from '@/components/Form';
import { Input, InputWithLabel } from '@/components/Input';

import { InputField } from '@/types';
import { errorClassHandler } from '@/utils';

import $wrapperStyle from '@/components/Input/InputWithLabel/index.module.sass';

const normalizeData = (data: Record<string, InputField>): Record<string, string> => {
  return Object.keys(data).reduce(
    (acc, current) => {
      return {
        ...acc,
        [current]: data[current].value,
      };
    },
    {} as Record<string, string>,
  );
};

type SubmitHandlerArgs = {
  e: Event | undefined;
  form: Form;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (data?: any) => void | Promise<void>;
  shouldResetForm?: boolean;
};

export const onSubmitHandler = async ({ e, form, callback, shouldResetForm = true }: SubmitHandlerArgs) => {
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
