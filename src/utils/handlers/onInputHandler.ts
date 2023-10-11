import { Input, InputWithLabel } from '@/components/Input';
import { InputField } from '@/types';

export const onInputHandler = (
  e: Event | undefined,
  child: Input | InputWithLabel,
  field: InputField,
  $inputStyle: CSSModuleClasses,
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
    input.element.classList.remove($inputStyle.error);
  } else {
    child.element.classList.remove($inputStyle.error);
  }

  input.checkField(target.value, field);
};
