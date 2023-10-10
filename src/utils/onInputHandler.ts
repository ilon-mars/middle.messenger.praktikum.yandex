import { Input } from '@/components/Input';

export const onInputHandler = (
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
    child.element.classList.remove($inputStyle.error);
    child.checkField(target, field);
  }
};
