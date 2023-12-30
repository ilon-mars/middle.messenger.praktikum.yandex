import { ID } from '@/types';

export const mergeFormData = (id: ID, avatar: FormData): FormData => {
  const mergedFormData = new FormData();

  mergedFormData.append('chatId', id.toString());
  for (const [name, value] of avatar.entries()) {
    mergedFormData.append(name, value);
  }

  return mergedFormData;
};
