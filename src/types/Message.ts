import { ID } from './requestData';

export type Message = {
  name?: string;
  chat_id: ID;
  time: string;
  timeText?: string;
  type: string;
  user_id: ID;
  content: string;
  file?: {
    id: number;
    user_id: ID;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};
