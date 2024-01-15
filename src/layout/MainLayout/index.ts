import { Block } from '@/core/Block/index.ts';

import { tmpl } from './index.tmpl.ts';

import { MainLayoutProps } from '@/types/index.ts';

export class MainLayout extends Block {
  constructor(props: MainLayoutProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
