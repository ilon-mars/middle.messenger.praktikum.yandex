import store from '@/core/Store';
import { Block } from '@/core/Block';

import { tmpl } from '../index.tmpl';

import { RegisterForm } from '@/components/Form';
import { Link } from '@/components/Link';

import AuthController from '@/controllers/AuthController';

import { AuthProps, SignUpRequest } from '@/types';
import { onSubmitHandler, REGISTER_LINK, showNotification } from '@/utils';

import $style from '../index.module.sass';

const signUp = async (data: SignUpRequest) => {
  await AuthController.signUp(data);
};

export class Register extends Block {
  constructor(props: AuthProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.form = new RegisterForm({
      events: {
        submit: async e => {
          const form = this.children.form as RegisterForm;

          await onSubmitHandler({ e, form, callback: signUp });

          showNotification(this, store);
        },
      },
    });

    this.children.link = new Link(REGISTER_LINK);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
