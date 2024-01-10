import { Block } from '@/core/Block/index.ts';
import store from '@/core/Store/index.ts';

import { tmpl } from '../index.tmpl.ts';

import { LoginForm } from '@/components/Form/index.ts';
import { Link } from '@/components/Link/index.ts';

import AuthController from '@/controllers/AuthController.ts';

import { AuthProps, SignInRequest } from '@/types/index.ts';
import { LOGIN_LINK, onSubmitHandler, showNotification } from '@/utils/index.ts';

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
