import { Message } from '../Message.ts';

export type MessageProps = Message & {
  isMe: boolean;
};
