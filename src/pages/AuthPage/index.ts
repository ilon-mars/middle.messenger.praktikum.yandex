import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { Login } from '@/pages/AuthPage/modules/Login/index.ts';
import { Register } from '@/pages/AuthPage/modules/Registration/index.ts';

import { AuthPageProps } from '@/types/index.ts';

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
