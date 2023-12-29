import { Block } from '@/core/Block';
import store, { State, withStore } from '@/core/Store';

import { tmpl } from './index.tmpl';

import { WindowStub } from '@/pages/ChatPage/modules/WindowStub';
import { ChatSection } from '@/pages/ChatPage/modules/ChatSection';
import { Message } from '@/pages/ChatPage/modules/Message';

import { normalizeChatMessage, isEqual } from '@/utils';

const windowStub = new WindowStub();

export class Chat extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.content = windowStub;
  }

  componentShouldUpdate(oldProps: State, newProps: State) {
    if (store.state.selectedChat?.id) {
      const messages =
        store.state.messages && store.state.messages[store.state.selectedChat.id].length > 0
          ? store.state.messages[store.state.selectedChat.id].map(message => new Message(normalizeChatMessage(message)))
          : '<span>Пока нет сообщений</span>';

      this.children.content = new ChatSection({ messages });

      ((this.children.content.children.header as Block).children.avatar as Block).setProps({
        name: store.state.selectedChat.title,
        ...(store.state.selectedChat.avatarUrl && { src: store.state.selectedChat.avatarUrl }),
      });
    } else {
      this.children.content = windowStub;
    }

    return !isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State) {
  if (!state) {
    return {};
  }

  return {
    chats: [...(state.chats?.data || [])],
    selectedChatId: state.selectedChat?.id || null,
    messages: state.messages,
  };
}

export const ChatPage = withStore(Chat, mapStateToProps);
