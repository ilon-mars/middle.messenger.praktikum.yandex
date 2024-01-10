import { User } from './User.ts';
import { ID } from './requestData/index.ts';

export type Chat = {
  id: ID;
  title: string;
  avatar: string | null;
  unread_count: number;
  selectedChat?: boolean;
  created_by: ID;
  last_message: {
    user: Omit<User, 'id' | 'display_name'>;
    time: string;
    content: string;
  } | null;
};
