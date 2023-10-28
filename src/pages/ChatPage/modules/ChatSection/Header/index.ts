import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';

import { PROFILE_AVATAR } from '@/utils';

import $style from './index.module.sass';

export class Header extends Block {
  constructor() {
    super($style);
  }

  init() {
    this.children.avatar = new Avatar({ name: PROFILE_AVATAR.name }, 'small');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
