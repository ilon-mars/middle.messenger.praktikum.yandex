import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Login } from '@/pages/AuthPage/modules/Login';
import { Register } from '@/pages/AuthPage/modules/Registration';

import { AuthPageProps } from '@/types';

export class AuthPage extends Block {
  constructor(props: AuthPageProps) {
    super(props);
  }

  init() {
    this.children.content = this.props.hasAccount
      ? new Login({ title: this.props.title })
      : new Register({ title: this.props.title });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
