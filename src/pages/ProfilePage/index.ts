import { Block } from '@/core/Block/index.ts';
import router from '@/core/Router/index.ts';
import store, { State, withStore } from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { Avatar } from '@/components/Avatar/index.ts';
import { DefaultButton } from '@/components/Button/index.ts';
import { GoBack } from '@/components/GoBack/index.ts';
import { Link } from '@/components/Link/index.ts';
import { UploadAvatarModal } from '@/components/Modal/UploadAvatar/index.ts';

import AuthController from '@/controllers/AuthController.ts';
import UserController from '@/controllers/UserController.ts';

import {
  EDIT_PASSWORD,
  EDIT_PROFILE,
  LOGOUT,
  PROFILE_INFO_CARDS,
  UPLOAD_AVATAR_STATE_TITLES,
  getAvatarSrc,
  normalizeCardsData,
} from '@/utils/index.ts';

import $style from './index.module.sass';

class Profile extends Block {
  constructor() {
    super({ $style });
  }

  init() {
    this.children.goBack = new GoBack();
    this.children.editProfileLink = new Link(EDIT_PROFILE);
    this.children.editPasswordLink = new Link(EDIT_PASSWORD);
    this.children.logout = new DefaultButton(
      {
        hasText: true,
        text: LOGOUT.text,
        events: {
          click: e => {
            e?.preventDefault();

            AuthController.logout();
            router.go(LOGOUT.to);
          },
        },
      },
      $style.logout,
    );

    this.children.uploadAvatarModal = new UploadAvatarModal({
      title: UPLOAD_AVATAR_STATE_TITLES.start,
      callback: data => UserController.changeAvatar(data),
      events: {
        click: e => {
          const target = e?.target as HTMLElement;

          if (!target) {
            return;
          }

          if (target.matches('#avatar-modal')) {
            (this.children.uploadAvatarModal as Block).hide();
          }
        },
      },
    });

    this.children.avatar = new Avatar({
      isClickable: true,
      events: {
        click: () => {
          (this.children.uploadAvatarModal as Block).show();
        },
      },
    });
  }

  async componentDidMount() {
    await AuthController.fetchUser();

    if (store.state.user && store.state.user.data) {
      this.setProps({ cards: normalizeCardsData(store.state.user.data, PROFILE_INFO_CARDS) });
      (this.children.avatar as Block).setProps({ name: store.state.user.data.first_name });
    }
  }

  componentShouldUpdate() {
    if (store.state.user?.data?.avatar) {
      (this.children.avatar as Block).setProps({
        src: getAvatarSrc(store.state.user.data.avatar),
      });
    }
    return true;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State) {
  if (!state || !state.user) {
    return {};
  }

  return { ...state.user };
}

export const ProfilePage = withStore(Profile, mapStateToProps);
