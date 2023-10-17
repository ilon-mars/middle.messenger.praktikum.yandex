import { createIconsMap } from './createIconsMap';

export const getRawSvg = (name: string) => {
  const map = createIconsMap();

  if (!Object.keys(map).includes(name)) {
    throw new Error(`Иконки ${name} нет 👾`);
  }

  return map[name];
};
