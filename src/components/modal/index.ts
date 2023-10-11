import { Block } from '@/core/Block';

import { loginTmpl, registerTmpl } from './index.tmpl';

import { Link } from '@/components/Link';
import { LoginForm, RegisterForm } from '@/components/Form';

import { ModalProps } from '@/types';
import { LOGIN_LINK, REGISTER_LINK } from '@/utils/constants';
import { onSubmitHandler } from '@/utils';

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
    this.children.form = new LoginForm({
      events: {
        submit: e => {
          const form = this.children.form as LoginForm;

          onSubmitHandler(e, form);
        },
      },
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
    this.children.form = new RegisterForm({
      events: {
        submit: e => {
          const form = this.children.form as RegisterForm;

          onSubmitHandler(e, form);
        },
      },
    });

    this.children.link = new Link(REGISTER_LINK);
  }

  render() {
    return this.compile(registerTmpl, this.props);
  }
}
