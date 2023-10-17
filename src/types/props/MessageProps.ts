import { ReceiverMessage, SenderMessage } from '../ChatMessage';

export type MessageProps = (SenderMessage | ReceiverMessage) & {
  isSender: boolean;
};
