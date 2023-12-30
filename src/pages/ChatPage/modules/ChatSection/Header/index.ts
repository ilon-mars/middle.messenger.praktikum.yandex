import { Block } from '@/core/Block';
import store from '@/core/Store';

import { tmpl } from './index.tmpl';

import { Avatar } from '@/components/Avatar';
import { DefaultButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { ChatMenu } from '@/components/Modal/ChatMenu';

import { ChatHeaderProps } from '@/types';

import $style from './index.module.sass';
import { UploadAvatarModal } from '@/components/Modal';
import { UPLOAD_AVATAR_STATE_TITLES } from '@/utils';
import ChatController from '@/controllers/ChatController';

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
        icon: new Icon({ name: 'close' }),
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
        icon: new Icon({ name: 'dots' }),
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
