import { ICONS } from './constants';

export const createIconsMap = () => {
  const iconsMap: Record<string, string> = {};

  Object.keys(ICONS).forEach(key => {
    const iconName = key.split(/[/.]+/g).slice(-2, -1)[0];

    iconsMap[iconName] = ICONS[key];
  });

  return iconsMap;
};
