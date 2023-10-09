import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';

import { PROFILE_AVATAR, PROFILE_INFO_CARDS } from '@/utils';
import { ProfilePageProps } from '@/types';

import $style from './index.module.sass';

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      cards: PROFILE_INFO_CARDS,
      $style,
    });
  }

  init() {
    this.children.avatar = new Avatar(PROFILE_AVATAR);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
