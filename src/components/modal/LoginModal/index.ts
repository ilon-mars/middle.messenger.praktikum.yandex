import { Modal } from '@/components/Modal/Modal';
import { LoginForm } from '@/components/Form';
import { Link } from '@/components/Link';

import { ModalProps } from '@/types';
import { onSubmitHandler, LOGIN_LINK } from '@/utils';

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
}
