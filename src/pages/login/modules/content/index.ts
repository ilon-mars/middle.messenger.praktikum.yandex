import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { input } from '@/components/input';
import { button } from '@/components/button';

import { LOGIN_BUTTON, LOGIN_INPUT, PASSWORD_INPUT } from '@/utils';

import $style from './index.module.sass';

export const content = () => {
  return Handlebars.compile(tmpl)({
    loginInput: input(LOGIN_INPUT),
    passwordInput: input(PASSWORD_INPUT),
    submitButton: button(LOGIN_BUTTON),
    $style,
  });
};
