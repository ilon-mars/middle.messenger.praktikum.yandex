import { Role, User } from '../User.ts';
import { ID } from './ID.ts';

export type GetChatsRequest = {
  offset?: number;
  limit?: number;
  title?: string;
};

export type CreateChatRequest = {
  title: string;
};

export type DeleteChatRequest = {
  chatId: ID;
};

export type DeleteChatResponse = {
  userId: ID;
  result: {
    id: ID;
    title: string;
    avatar: string;
    created_by: ID;
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
