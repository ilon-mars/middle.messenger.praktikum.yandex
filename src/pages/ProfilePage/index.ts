import { Block } from '@/core/Block';
import store, { State, withStore } from '@/core/Store';
import router from '@/core/Router';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';
import { DefaultButton } from '@/components/Button';
import { GoBack } from '@/components/GoBack';
import { Link } from '@/components/Link';
import { UploadAvatarModal } from '@/components/Modal/UploadAvatar';

import AuthController from '@/controllers/AuthController';

import { EDIT_PASSWORD, EDIT_PROFILE, LOGOUT, PROFILE_INFO_CARDS, UPLOAD_AVATAR_STATE_TITLES } from '@/utils';
import { User, ProfileCardTemplate } from '@/types';

import $style from './index.module.sass';

const normalizeCardsData = (
  userData: Omit<User, 'id'>,
  cardsTemplate: ProfileCardTemplate[],
): ProfileCardTemplate[] => {
  return cardsTemplate.reduce((acc, current) => {
    acc.push({ ...current, text: userData[current.slug as keyof Omit<User, 'id' | 'avatar'>] });
    return acc;
  }, [] as ProfileCardTemplate[]);
};

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

  async componentDidMount(): Promise<void> {
    await AuthController.fetchUser();

    if (store.state.user && store.state.user.data) {
      this.setProps({ cards: normalizeCardsData(store.state.user.data, PROFILE_INFO_CARDS) });
      (this.children.avatar as Block).setProps({ name: store.state.user.data.first_name });
    }
  }

  componentShouldUpdate(): boolean {
    if (store.state.user?.data.avatar) {
      (this.children.avatar as Block).setProps({
        src: `${import.meta.env.VITE_API_URL}/resources/${store.state.user.data.avatar}`,
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
    return;
  }

  return { ...state.user };
}

export const ProfilePage = withStore(Profile, mapStateToProps);
