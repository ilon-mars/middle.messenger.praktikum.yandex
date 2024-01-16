import { Block } from '@/core/Block/index.ts';
import store from '@/core/Store/index.ts';

import { tmpl } from '../index.tmpl.ts';

import { RegisterForm } from '@/components/Form/index.ts';
import { Link } from '@/components/Link/index.ts';

import AuthController from '@/controllers/AuthController.ts';

import { AuthProps, SignUpRequest } from '@/types/index.ts';
import { REGISTER_LINK, onSubmitHandler, showNotification } from '@/utils/index.ts';

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
