import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import $style from './index.module.sass';

import { PROFILE_INFO_CARDS } from '@/utils';
import { LinkEnum } from '@/enums';

export const profilePage = () => {
  return Handlebars.compile(tmpl)({
    $style,
    cards: PROFILE_INFO_CARDS,
    to: `/${LinkEnum.CHAT}`,
    name: 'Иван',
  });
};
