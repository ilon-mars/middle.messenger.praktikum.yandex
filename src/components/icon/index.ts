import Handlebars from 'handlebars';

import { getRawSvg } from '@/utils';

export const icon = (iconName: string) => {
  return Handlebars.compile(getRawSvg(iconName))({});
};
