import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';
import { GoBack } from '@/components/GoBack';
import { Link } from '@/components/Link';

import { EDIT_PASSWORD, EDIT_PROFILE, LOGOUT, PROFILE_AVATAR, PROFILE_INFO_CARDS } from '@/utils';
import { ProfilePageProps } from '@/types';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super('section', {
      ...props,
      classes: [$style.wrapper, 'container'],
      cards: PROFILE_INFO_CARDS,
      $style,
    });
  }

  init() {
    this.children.avatar = new Avatar(PROFILE_AVATAR);
    this.children.goBack = new GoBack({ to: `/${LinkEnum.CHAT}` });
    this.children.editProfileLink = new Link(EDIT_PROFILE);
    this.children.editPasswordLink = new Link(EDIT_PASSWORD);
    this.children.logout = new Link(LOGOUT, 'logout');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
