import { User } from './User';
import { ID } from './requestData/ID';

export type Chat = {
  id: ID;
  title: string;
  avatar: string;
  unread_count: number;
  selectedChat?: boolean;
  last_message: {
    user: Omit<User, 'id' | 'display_name'>;
    time: string;
    content: string;
  };
};
