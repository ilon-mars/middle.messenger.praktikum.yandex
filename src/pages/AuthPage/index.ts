import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { LoginModal, RegisterModal } from '@/components/Modal';

import { AuthPageProps } from '@/types';

export class AuthPage extends Block {
  constructor(props: AuthPageProps) {
    super('main', {
      ...props,
      classes: ['main-layout'],
    });
  }

  init() {
    this.children.modal = this.props.hasAccount
      ? new LoginModal({ title: this.props.title })
      : new RegisterModal({ title: this.props.title });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
