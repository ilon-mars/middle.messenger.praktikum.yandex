import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';
import { GoBack } from '@/components/GoBack';

import { PROFILE_AVATAR, PROFILE_INFO_CARDS } from '@/utils';
import { ProfilePageProps } from '@/types';
import { LinkEnum } from '@/enums';

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
    this.children.goBack = new GoBack({ to: `/${LinkEnum.CHAT}` });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
