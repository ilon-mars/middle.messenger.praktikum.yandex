import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';

import $style from './index.module.sass';

export class Header extends Block {
  constructor() {
    super($style);
  }

  init() {
    this.children.avatar = new Avatar({ name: 'Иван' }, 'small');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
