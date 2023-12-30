import { API } from '@/services/api';

import {
  AddUsersRequest,
  Chat,
  ChatTokenRequest,
  ChatTokenResponse,
  CreateChatRequest,
  DeleteChatRequest,
  DeleteChatResponse,
  DeleteUsersRequest,
  GetChatUsersRequest,
  GetChatUsersResponse,
  GetChatsRequest,
} from '@/types';

export class ChatAPI extends API {
  constructor() {
    super('/chats');
  }

  async getChats(data?: GetChatsRequest): Promise<Chat[]> {
    return this.http.get('', { data }) as Promise<Chat[]>;
  }

  async createChat(data: CreateChatRequest): Promise<unknown> {
    return this.http.post('', { data });
  }

  async deleteChat(data: DeleteChatRequest): Promise<DeleteChatResponse> {
    return this.http.delete('', { data }) as Promise<DeleteChatResponse>;
  }

  async getChatUsers(data: GetChatUsersRequest): Promise<GetChatUsersResponse[]> {
    return this.http.get(`/${data.id}/users`, { data }) as Promise<GetChatUsersResponse[]>;
  }

  async addUsers(data: AddUsersRequest): Promise<unknown> {
    return this.http.put(`/users`, { data });
  }

  async deleteUsers(data: DeleteUsersRequest): Promise<unknown> {
    return this.http.delete(`/users`, { data });
  }

  async getChatToken(data: ChatTokenRequest): Promise<ChatTokenResponse> {
    return this.http.post(`/token/${data.id}`, { data }) as Promise<ChatTokenResponse>;
  }

  async changeChatAvatar(data: FormData) {
    return await this.http.put('/avatar', { data });
  }
}
