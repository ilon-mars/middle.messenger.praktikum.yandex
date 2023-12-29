import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { DefaultButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { AddUserModal, RemoveUserModal } from '@/components/Modal';

import { ADD_USER_TO_CHAT, REMOVE_USER_FROM_CHAT } from '@/utils';
import { Events } from '@/types';

import $style from './index.module.sass';

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
        icon: new Icon({ name: 'add' }),
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
        icon: new Icon({ name: 'close' }),
        events: {
          click: async e => {
            e?.preventDefault();

            (this.children.removeUserModal as Block).show();
          },
        },
      },
      $style.menuButton,
    );

    this.children.addUserModal = new AddUserModal({
      title: 'Введите id пользователя',
      buttonProps: ADD_USER_TO_CHAT,
      formName: 'add-user-form',
      modalId: 'add-user-modal',
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
