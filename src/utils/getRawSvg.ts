import { createIconsMap } from './createIconsMap.ts';

export const getRawSvg = (name: string) => {
  const map = createIconsMap();

  if (!Object.keys(map).includes(name)) {
    throw new Error(`Иконки ${name} нет 👾`);
  }

  return map[name];
};
