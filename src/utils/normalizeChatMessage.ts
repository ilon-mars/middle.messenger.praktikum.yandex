import { ChatParticipantEnum } from '@/enums';
import { ReceiverMessage, SenderMessage } from '@/types/ChatMessage';

export const normalizeChatMessage = (message: SenderMessage | ReceiverMessage) => {
  const isSender = message.type === ChatParticipantEnum.SENDER;

  return { ...message, isSender };
};
