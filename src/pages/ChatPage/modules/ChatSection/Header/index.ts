import { Block } from '@/core/Block/index.ts';
import store from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { Avatar } from '@/components/Avatar/index.ts';
import { DefaultButton } from '@/components/Button/index.ts';
import { ChatMenu } from '@/components/Modal/ChatMenu/index.ts';
import { UploadAvatarModal } from '@/components/Modal/index.ts';

import ChatController from '@/controllers/ChatController.ts';

import { ChatHeaderProps } from '@/types/index.ts';
import { UPLOAD_AVATAR_STATE_TITLES } from '@/utils/index.ts';

import $style from './index.module.sass';

import closeIcon from '@/assets/icons/close.svg';
import dotsIcon from '@/assets/icons/dots.svg';

export class Header extends Block {
  constructor(props?: ChatHeaderProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.closeButton = new DefaultButton(
      {
        hasText: false,
        icon: closeIcon(),
        events: {
          click: () => {
            store.set('selectedChat', null);
          },
        },
      },
      $style.closeButton,
    );

    this.children.avatar = new Avatar(
      {
        isClickable: true,
        events: {
          click: () => {
            (this.children.updateChatAvatarModal as Block).show();
          },
        },
      },
      'small',
    );

    this.children.updateChatAvatarModal = new UploadAvatarModal({
      title: UPLOAD_AVATAR_STATE_TITLES.start,
      callback: data => ChatController.changeChatAvatar(store.state.selectedChat!.id, data),
      events: {
        click: e => {
          const target = e?.target as HTMLElement;

          if (!target) {
            return;
          }

          if (target.matches('#avatar-modal')) {
            (this.children.updateChatAvatarModal as Block).hide();
          }
        },
      },
    });

    this.children.menuButton = new DefaultButton(
      {
        hasText: false,
        icon: dotsIcon(),
        attrs: {
          type: 'button',
        },
        events: {
          click: () => {
            (this.children.chatMenu as Block).show();
          },
        },
      },
      $style.menuButton,
    );

    this.children.chatMenu = new ChatMenu();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
