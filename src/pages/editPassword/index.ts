import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { input } from '@/components/input';
import { button } from '@/components/button';

import { SAVE_PROFILE_BUTTON, EDIT_PASSWORD_INPUTS } from '@/utils';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export const editPasswordPage = () => {
  return Handlebars.compile(tmpl)({
    $style,
    goBack: `/${LinkEnum.PROFILE}`,
    inputs: EDIT_PASSWORD_INPUTS.map(item => input({ ...item, isProfile: true })).join(' '),
    saveButton: button({ ...SAVE_PROFILE_BUTTON, hasIcon: true }),
  });
};
