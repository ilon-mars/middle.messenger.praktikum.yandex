import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { input } from '@/components/input';
import { button } from '@/components/button';
import { avatar } from '@/components/avatar';

import { SAVE_PROFILE_BUTTON, EDIT_PROFILE_INPUTS } from '@/utils';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export const editProfilePage = () => {
  return Handlebars.compile(tmpl)({
    $style,
    goBack: `/${LinkEnum.PROFILE}`,
    avatar: avatar({
      name: 'Иван',
      to: `/${LinkEnum.EDIT_PROFILE}`,
    }),
    inputs: EDIT_PROFILE_INPUTS.map(item => input({ ...item, isProfile: true })).join(' '),
    saveButton: button({ ...SAVE_PROFILE_BUTTON, hasIcon: true }),
  });
};
