import { ID } from './ID';
import { Role, User } from '../User';

export type GetChatsRequest = {
  offset?: number;
  limit?: number;
  title?: string;
};

export type GetChatsResponse = {
  id: ID;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;
  last_message: {
    user: Omit<User, 'id' | 'display_name'>;
    time: Date;
    content: string;
  };
};

export type CreateChatRequest = {
  title: string;
};

export type DeleteChatRequest = {
  chatId: number;
};

export type DeleteChatResponse = {
  userId: ID;
  result: {
    id: number;
    title: string;
    avatar: string;
    created_by: number;
  };
};

export type GetChatUsersRequest = {
  id: ID;
  offset?: number;
  limit?: number;
  name?: string;
  email?: string;
};

export type GetChatUsersResponse = {
  id: ID;
  role: Role;
} & Omit<User, 'id' | 'email' | 'phone'>;

export type GetMessagesCountRequest = {
  id: ID;
};

export type GetMessagesCountResponse = {
  unread_count: number;
};

export type AddUsersRequest = {
  users: ID[];
  chatId: ID;
};

export type DeleteUsersRequest = {
  users: ID[];
  chatId: ID;
};

export type ChatTokenRequest = {
  id: ID;
};

export type ChatTokenResponse = {
  token: string;
};
