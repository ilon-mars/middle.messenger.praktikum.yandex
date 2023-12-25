import store from '@/core/Store';
import { Modal } from '@/components/Modal/Modal';
import { LoginForm } from '@/components/Form';
import { Link } from '@/components/Link';

import AuthController from '@/controllers/AuthController';

import { ModalProps, SignInRequest } from '@/types';
import { onSubmitHandler, LOGIN_LINK } from '@/utils';

const signIn = async (data: SignInRequest) => {
  await AuthController.signIn(data);
};

export class LoginModal extends Modal {
  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.form = new LoginForm({
      events: {
        submit: async e => {
          const form = this.children.form as LoginForm;

          await onSubmitHandler(e, form, signIn);

          if (store.state.user?.error) {
            this.setProps({ notification: store.state.user.error });

            setTimeout(() => {
              this.setProps({ notification: false });
            }, 2500);
          }
        },
      },
    });

    this.children.link = new Link(LOGIN_LINK);
  }
}
