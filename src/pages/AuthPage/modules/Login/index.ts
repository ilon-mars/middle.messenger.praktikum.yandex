import store from '@/core/Store';
import { Block } from '@/core/Block';

import { tmpl } from '../index.tmpl';

import { LoginForm } from '@/components/Form';
import { Link } from '@/components/Link';

import AuthController from '@/controllers/AuthController';

import { AuthProps, SignInRequest } from '@/types';
import { onSubmitHandler, LOGIN_LINK, showNotification } from '@/utils';

import $style from '../index.module.sass';

const signIn = async (data: SignInRequest) => {
  await AuthController.signIn(data);
};

export class Login extends Block {
  constructor(props: AuthProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.form = new LoginForm({
      events: {
        submit: async e => {
          const form = this.children.form as LoginForm;

          await onSubmitHandler({ e, form, callback: signIn });

          showNotification(this, store);
        },
      },
    });

    this.children.link = new Link(LOGIN_LINK);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
