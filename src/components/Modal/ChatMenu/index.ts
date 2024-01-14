import { Block } from '@/core/Block/index.ts';
import store from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { DefaultButton } from '@/components/Button/index.ts';
import { AddUserModal, RemoveUserModal } from '@/components/Modal/index.ts';

import ChatController from '@/controllers/ChatController.ts';

import { Events } from '@/types/index.ts';
import { ADD_USER_TO_CHAT, DELETE_CHAT, REMOVE_USER_FROM_CHAT } from '@/utils/index.ts';

import $style from './index.module.sass';

import addIcon from '@/assets/icons/add.svg';
import closeIcon from '@/assets/icons/close.svg';

export class ChatMenu extends Block {
  constructor(props?: { events: Events }) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.addUser = new DefaultButton(
      {
        ...ADD_USER_TO_CHAT,
        icon: addIcon(),
        events: {
          click: async e => {
            e?.preventDefault();

            (this.children.addUserModal as Block).show();
          },
        },
      },
      $style.menuButton,
    );

    this.children.removeUser = new DefaultButton(
      {
        ...REMOVE_USER_FROM_CHAT,
        icon: closeIcon(),
        events: {
          click: async e => {
            e?.preventDefault();

            (this.children.removeUserModal as Block).show();
          },
        },
      },
      $style.menuButton,
    );

    this.children.deleteChat = new DefaultButton(
      {
        ...DELETE_CHAT,
        events: {
          click: async e => {
            e?.preventDefault();

            await ChatController.deleteChat(store.state.selectedChat!.id);
            store.set('selectedChat', null);
            this.hide();
          },
        },
      },
      $style.deleteChatButton,
    );

    this.children.addUserModal = new AddUserModal({
      title: 'Введите id пользователя',
      buttonProps: ADD_USER_TO_CHAT,
      formName: 'add-user-form',
      modalId: 'add-user-modal',
      overlayBind: () => this.hide(),
      events: {
        click: e => {
          const target = e?.target as HTMLElement;

          if (!target) {
            return;
          }

          if (target.matches('#add-user-modal')) {
            (this.children.addUserModal as Block).hide();
            this.hide();
          }
        },
      },
    });

    this.children.removeUserModal = new RemoveUserModal({
      title: 'Введите id пользователя',
      buttonProps: REMOVE_USER_FROM_CHAT,
      formName: 'remove-user-form',
      modalId: 'remove-user-modal',
      overlayBind: () => this.hide(),
      events: {
        click: e => {
          const target = e?.target as HTMLElement;

          if (!target) {
            return;
          }

          if (target.matches('#remove-user-modal')) {
            (this.children.removeUserModal as Block).hide();
            this.hide();
          }
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
