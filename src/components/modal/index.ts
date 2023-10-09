import { Block } from '@/core/Block';

import { loginTmpl, registerTmpl } from './index.tmpl';

import { Button } from '@/components/Button';
import { EmailInput, LoginInput, NameInput, PasswordInput, PhoneInput } from '@/components/Input';
import { Link } from '@/components/Link';

import { ModalProps } from '@/types';
import {
  EMAIL_INPUT,
  LOGIN_BUTTON,
  LOGIN_INPUT,
  LOGIN_LINK,
  NAME_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
  REGISTER_BUTTON,
  REGISTER_LINK,
  REPEAT_PASSWORD_INPUT,
  SECOND_NAME_INPUT,
} from '@/utils/constants';

import $style from './index.module.sass';

abstract class Modal extends Block {
  constructor(props: ModalProps) {
    super('dialog', {
      ...props,
      classes: [$style.modal],
      $style,
    });
  }
}

export class LoginModal extends Modal {
  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.loginInput = new LoginInput(LOGIN_INPUT);
    this.children.passwordInput = new PasswordInput(PASSWORD_INPUT);

    this.children.submitButton = new Button({
      ...LOGIN_BUTTON,
      hasIcon: true,
      events: { click: () => console.log('Click') },
    });

    this.children.link = new Link(LOGIN_LINK);
  }

  render() {
    return this.compile(loginTmpl, this.props);
  }
}

export class RegisterModal extends Modal {
  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.nameInput = new NameInput(NAME_INPUT);
    this.children.secondNameInput = new NameInput(SECOND_NAME_INPUT);
    this.children.emailInput = new EmailInput(EMAIL_INPUT);
    this.children.phoneInput = new PhoneInput(PHONE_INPUT);
    this.children.loginInput = new LoginInput(LOGIN_INPUT);
    this.children.passwordInput = new PasswordInput(PASSWORD_INPUT);
    this.children.repeatPasswordInput = new PasswordInput(REPEAT_PASSWORD_INPUT);

    this.children.submitButton = new Button({
      ...REGISTER_BUTTON,
      hasIcon: true,
      events: { click: () => console.log('Click') },
    });

    this.children.link = new Link(REGISTER_LINK);
  }

  render() {
    return this.compile(registerTmpl, this.props);
  }
}
