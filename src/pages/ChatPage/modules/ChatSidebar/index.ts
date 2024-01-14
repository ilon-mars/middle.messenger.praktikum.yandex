import { Block } from '@/core/Block/index.ts';
import store, { State, withStore } from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { DefaultButton } from '@/components/Button/index.ts';
import { SearchForm } from '@/components/Form/index.ts';
import { Link } from '@/components/Link/index.ts';
import { AddChatModal } from '@/components/Modal/AddChat/index.ts';
import { ChatItem } from '@/pages/ChatPage/modules/ChatItem/index.ts';
import { ChatList } from '@/pages/ChatPage/modules/ChatList/index.ts';

import ChatController from '@/controllers/ChatController.ts';

import { ADD_CHAT, GO_TO_PROFILE, isEqual, normalizeChats } from '@/utils/index.ts';

import $style from './index.module.sass';

import addIcon from '@/assets/icons/add.svg';

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
        icon: addIcon(),
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
