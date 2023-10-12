import { Input, InputWithLabel } from '@/components/Input';
import { InputField } from '@/types';

export const onBlurHandler = (
  e: Event | undefined,
  child: Input | InputWithLabel,
  field: InputField,
  errorClass: string,
) => {
  if (!e) {
    return;
  }

  const target = e?.target as HTMLInputElement | HTMLTextAreaElement;
  const input = child instanceof InputWithLabel ? (child.children.input as Input) : child;

  if (!input.element || !child.element) {
    return;
  }

  input.checkField(target.value, field);

  if (child instanceof Input) {
    input.element.classList.remove(errorClass);
    field.isValid ? input.element.classList.remove(errorClass) : input.element.classList.add(errorClass);
  } else {
    child.element.classList.remove(errorClass);
    field.isValid ? child.element.classList.remove(errorClass) : child.element.classList.add(errorClass);
  }
};
