import { Modal } from '@/components/Modal/Modal';
import { RegisterForm } from '@/components/Form';
import { Link } from '@/components/Link';

import { ModalProps } from '@/types';
import { onSubmitHandler, REGISTER_LINK } from '@/utils';

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
}
