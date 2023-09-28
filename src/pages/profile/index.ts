import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { avatar } from '@/components/avatar';

import { MAIN_PAGE_ROUTE, PROFILE_INFO_CARDS } from '@/utils';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export const profilePage = () => {
  return Handlebars.compile(tmpl)({
    $style,
    avatar: avatar({
      name: 'Иван',
      to: `/${LinkEnum.EDIT_PROFILE}`,
    }),
    cards: PROFILE_INFO_CARDS,
    goBack: `/${LinkEnum.CHAT}`,
    editProfile: `/${LinkEnum.EDIT_PROFILE}`,
    editPassword: `/${LinkEnum.EDIT_PASSWORD}`,
    logout: MAIN_PAGE_ROUTE,
  });
};
