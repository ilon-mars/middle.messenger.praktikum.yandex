export const queryStringify = (data: XMLHttpRequestBodyInit): string => {
  const values: string[] = [];

  Object.entries(data).forEach(pair => {
    values.push(pair.join('='));
  }, []);

  return `?${values.join('&')}`;
};
