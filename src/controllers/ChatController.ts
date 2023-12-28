import store from '@/core/Store';
import { ChatAPI } from '@/services/api';
import MessageController from './MessageController';

import { Chat, ID } from '@/types';

class ChatController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
  }

  createChat = async (title: string) => {
    try {
      await this.api.createChat({ title });
      await this.fetchChats();

      store.set('chats.error', undefined);
    } catch (error: unknown) {
      store.set('chats.error', (error as Error).message);
      console.error((error as Error).message);
    }
  };

  updateChats = async () => {
    const chats: Chat[] = (await this.api.getChats()) as Chat[];

    store.set('chats.data', chats);
  };

  fetchChats = async () => {
    const chats: Chat[] = (await this.api.getChats()) as Chat[];

    chats.map(async chat => {
      const { token } = await this.getToken(chat.id);
      await MessageController.connect(chat.id, token);
    });

    store.set('chats.data', chats);
  };

  addUserToChat = (id: ID, userId: ID) => {
    this.api.addUsers({ chatId: id, users: [userId] }).then(response => response);
  };

  removeUserFromChat = (id: ID, userId: ID) => {
    this.api.deleteUsers({ chatId: id, users: [userId] }).then(response => response);
  };

  delete = async (chatId: ID) => {
    await this.api.deleteChat({ chatId });
    await this.fetchChats();
  };

  getToken = (id: ID) => this.api.getChatToken({ id });

  selectChat = async (id: ID) => {
    const { token } = await this.getToken(id);
    MessageController.connect(id, token);

    store.set('selectedChatId', id);
  };
}

export default new ChatController();
