export const convertDateToTime = (date: string, withDate: boolean = true) => {
  const formatOptions: Intl.DateTimeFormatOptions = withDate
    ? {
        timeStyle: 'short',
        dateStyle: 'short',
      }
    : {
        timeStyle: 'short',
      };

  return new Intl.DateTimeFormat('ru', formatOptions).format(new Date(date));
};
