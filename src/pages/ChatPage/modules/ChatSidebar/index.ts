import { Block } from '@/core/Block';
import store, { State, withStore } from '@/core/Store';

import { tmpl } from './index.tmpl';

import { SearchForm } from '@/components/Form';
import { ChatItem } from '@/pages/ChatPage/modules/ChatItem';
import { Link } from '@/components/Link';
import { DefaultButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { AddChatModal } from '@/components/Modal/AddChat';
import { ChatList } from '@/pages/ChatPage/modules/ChatList';

import ChatController from '@/controllers/ChatController';

import { GO_TO_PROFILE, normalizeChats, isEqual, ADD_CHAT } from '@/utils';

import $style from './index.module.sass';

export class Sidebar extends Block {
  constructor() {
    super({ $style });
  }

  init() {
    this.children.link = new Link(GO_TO_PROFILE, 'chat');
    this.children.form = new SearchForm({});
    this.children.addChatButton = new DefaultButton(
      {
        hasText: false,
        icon: new Icon({ name: 'add' }),
        events: {
          click: () => {
            (this.children.addChatModal as Block).show();
          },
        },
      },
      $style.addChatButton,
    );

    this.children.addChatModal = new AddChatModal({
      title: 'Создать новый чат',
      buttonProps: ADD_CHAT,
      formName: 'add-chat-form',
      modalId: 'add-chat-modal',
      events: {
        click: e => {
          const target = e?.target as HTMLElement;

          if (!target) {
            return;
          }

          if (target.matches('#add-chat-modal')) {
            (this.children.addChatModal as Block).hide();
          }
        },
      },
    });

    this.children.chatList = new ChatList({ chats: [] });
  }

  async componentDidMount() {
    await ChatController.fetchChats();

    this.#updateChats();
  }

  componentShouldUpdate(oldProps: State, newProps: State) {
    this.#updateChats();

    return !isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  #updateChats() {
    if (store.state.chats?.data) {
      (this.children.chatList as Block).setProps({
        chats: normalizeChats(store.state.chats.data).map(
          chat =>
            new ChatItem({
              ...chat,
              events: {
                click: () => {
                  store.set('selectedChat.avatarUrl', null);

                  ChatController.selectChat(chat.id);
                  store.set('selectedChat.title', chat.name);

                  if (chat.avatarUrl.startsWith('http')) {
                    store.set('selectedChat.avatarUrl', chat.avatarUrl);
                  }
                },
              },
            }),
        ),
      });
    }
  }
}

function mapStateToProps(state: State) {
  if (!state || !state.chats) {
    return {};
  }

  return { ...state.chats };
}

export const ChatSidebar = withStore(Sidebar, mapStateToProps);
