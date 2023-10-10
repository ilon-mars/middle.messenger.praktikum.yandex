import { Input } from '@/components/Input';

export const onBlurHandler = (
  e: Event,
  child: Input,
  field: {
    value: string;
    isValid: boolean;
  },
  $inputStyle: CSSModuleClasses,
) => {
  const target = e?.target as HTMLInputElement;

  if (child.element) {
    child.checkField(target, field);
    field.isValid ? child.element.classList.remove($inputStyle.error) : child.element.classList.add($inputStyle.error);
  }
};
