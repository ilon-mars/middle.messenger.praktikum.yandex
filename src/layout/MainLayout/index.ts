import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainLayoutProps } from '@/types';

export class MainLayout extends Block {
  constructor(props: MainLayoutProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
