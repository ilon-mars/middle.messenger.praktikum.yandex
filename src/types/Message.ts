import { ID } from './requestData/index.ts';

export type Message = {
  id: ID;
  chat_id: ID;
  is_read: boolean;
  time: string;
  type: string;
  user_id: ID;
  content: string;
  file: {
    id: number;
    user_id: ID;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  } | null;
};
