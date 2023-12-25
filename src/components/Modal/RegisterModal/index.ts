import store from '@/core/Store';

import { Modal } from '@/components/Modal/Modal';
import { RegisterForm } from '@/components/Form';
import { Link } from '@/components/Link';

import AuthController from '@/controllers/AuthController';

import { ModalProps, SignUpRequest } from '@/types';
import { onSubmitHandler, REGISTER_LINK } from '@/utils';

const signUp = async (data: SignUpRequest) => {
  await AuthController.signUp(data);
};

export class RegisterModal extends Modal {
  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.form = new RegisterForm({
      events: {
        submit: async e => {
          const form = this.children.form as RegisterForm;

          await onSubmitHandler(e, form, signUp);

          if (store.state.user?.error) {
            this.setProps({ notification: store.state.user.error });

            setTimeout(() => {
              this.setProps({ notification: false });
            }, 2500);
          }
        },
      },
    });

    this.children.link = new Link(REGISTER_LINK);
  }
}
