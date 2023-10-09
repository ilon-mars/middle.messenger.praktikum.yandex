import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Icon } from '@/components/Icon';

import { RedirectTo } from '@/types';

import $style from './index.module.sass';

export class GoBack extends Block {
  constructor(props: { to: RedirectTo }) {
    super('button', { ...props, classes: [$style.goBack], $style });
  }

  init() {
    this.children.icon = new Icon({ name: 'arrow' });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
