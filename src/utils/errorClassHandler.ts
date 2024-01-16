import { InputField } from '@/types/index.ts';

export const errorClassHandler = (field: InputField, element: HTMLElement, errorClass: string) => {
  field.isValid ? element.classList.remove(errorClass) : element.classList.add(errorClass);
};
