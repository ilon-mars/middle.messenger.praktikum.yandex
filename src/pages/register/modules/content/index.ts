import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';
import { input } from '@/components/input';
import { button } from '@/components/button';

import {
  EMAIL_INPUT,
  LOGIN_INPUT,
  NAME_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
  REGISTER_BUTTON,
  REPEAT_PASSWORD_INPUT,
  SECOND_NAME_INPUT,
} from '@/utils';

import $style from './index.module.sass';

export const content = () => {
  return Handlebars.compile(tmpl)({
    nameInput: input(NAME_INPUT),
    secondNameInput: input(SECOND_NAME_INPUT),
    emailInput: input(EMAIL_INPUT),
    phoneInput: input(PHONE_INPUT),
    loginInput: input(LOGIN_INPUT),
    passwordInput: input(PASSWORD_INPUT),
    repeatPasswordInput: input(REPEAT_PASSWORD_INPUT),
    submitButton: button({ ...REGISTER_BUTTON, hasIcon: true }),
    $style,
  });
};
