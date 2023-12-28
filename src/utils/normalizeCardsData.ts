import { ProfileCardTemplate, User } from '@/types';

export const normalizeCardsData = (
  userData: Omit<User, 'id'>,
  cardsTemplate: ProfileCardTemplate[],
): ProfileCardTemplate[] => {
  return cardsTemplate.reduce((acc, current) => {
    acc.push({ ...current, text: userData[current.slug as keyof Omit<User, 'id' | 'avatar'>] });
    return acc;
  }, [] as ProfileCardTemplate[]);
};
