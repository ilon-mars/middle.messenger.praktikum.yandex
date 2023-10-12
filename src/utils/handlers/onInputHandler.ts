import { Input, InputWithLabel } from '@/components/Input';
import { InputField } from '@/types';

export const onInputHandler = (
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

  if (child instanceof Input) {
    input.element.classList.remove(errorClass);
  } else {
    child.element.classList.remove(errorClass);
  }

  input.checkField(target.value, field);
};
