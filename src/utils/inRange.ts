export const inRange = (string: string, range: [number, number | undefined]): boolean => {
  if (!range[1]) {
    return string.length === range[0];
  }

  return string.length >= range[0] && string.length <= range[1];
};
