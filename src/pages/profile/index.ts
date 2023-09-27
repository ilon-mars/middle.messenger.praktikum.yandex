import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { avatar } from '@/components/avatar';

import { PROFILE_INFO_CARDS } from '@/utils';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export const profilePage = () => {
  return Handlebars.compile(tmpl)({
    $style,
    avatar: avatar('Иван'),
    cards: PROFILE_INFO_CARDS,
    to: `/${LinkEnum.CHAT}`,
  });
};
