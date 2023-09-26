type iconsMap = {
  [key: string]: () => Promise<string>;
};

const icons = import.meta.glob('@/assets/icons/**', {
  as: 'raw',
}) as unknown as Record<string, () => Promise<string>>;

const getIconName = (key: string) => {
  const path = key.split(/[/.]+/g);
  return path[path.length - 2];
};

const iconsMap = Object.keys(icons).reduce((acc, currentIcon) => {
  acc[getIconName(currentIcon)] = icons[currentIcon];

  return acc;
}, {} as iconsMap);

export const icon = async (iconName: string) => {
  console.log(iconsMap[iconName]);
  return await iconsMap[iconName]();
};
