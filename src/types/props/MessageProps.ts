// import { ReceiverMessage, SenderMessage } from '../ChatMessage';
import { Message } from '../Message';

export type MessageProps = Message & {
  isMe: boolean;
};
