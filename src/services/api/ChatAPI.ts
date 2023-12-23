import { API } from '@/services/api';

import {
  AddUsersRequest,
  Chat,
  ChatTokenRequest,
  CreateChatRequest,
  DeleteChatRequest,
  DeleteChatResponse,
  DeleteUsersRequest,
  GetChatUsersRequest,
  GetChatUsersResponse,
  GetChatsRequest,
  // GetMessagesCountRequest,
  // GetMessagesCountResponse,
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

  // async getMessagesCount(data: GetMessagesCountRequest): Promise<GetMessagesCountResponse> {
  //   return this.http.get(`/new/${data.id}`, { data }) as Promise<GetMessagesCountResponse>;
  // }

  async addUsers(data: AddUsersRequest): Promise<unknown> {
    return this.http.put(`/users`, { data });
  }

  async deleteUsers(data: DeleteUsersRequest): Promise<unknown> {
    return this.http.delete(`/users`, { data });
  }

  async getChatToken(data: ChatTokenRequest): Promise<string> {
    return this.http.post(`/token/${data.id}`, { data }) as Promise<string>;
  }
}
