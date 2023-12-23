import { Block } from '@/core/Block';
import { State, withStore } from '@/core/Store';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';
import { GoBack } from '@/components/GoBack';
import { Link } from '@/components/Link';

import AuthController from '@/controllers/AuthController';

import { EDIT_PASSWORD, EDIT_PROFILE, LOGOUT, PROFILE_AVATAR, PROFILE_INFO_CARDS } from '@/utils';
import { LinkEnum } from '@/enums';
import { PROFILE_PAGE } from '@/pages/ProfilePage/constants';

import $style from './index.module.sass';

class Profile extends Block {
  constructor() {
    super({
      cards: PROFILE_INFO_CARDS,
      $style,
    });
  }

  init() {
    this.setProps(PROFILE_PAGE);

    this.children.avatar = new Avatar(PROFILE_AVATAR);
    this.children.goBack = new GoBack({ to: `/${LinkEnum.CHAT}` });
    this.children.editProfileLink = new Link(EDIT_PROFILE);
    this.children.editPasswordLink = new Link(EDIT_PASSWORD);
    this.children.logout = new Link(LOGOUT, 'logout');
  }

  componentDidMount(): void {
    AuthController.fetchUser();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State) {
  if (!state || !state.user) return;

  return { ...state.user };
}

export const ProfilePage = withStore(Profile, mapStateToProps);
