import { ChatParticipantEnum, MessageStatusEnum } from '@/enums';

export type ChatParticipant = `${ChatParticipantEnum}`;
export type MessageStatus = `${MessageStatusEnum}`;

type BaseMessage = {
  type: ChatParticipant;
  time: string;
  text?: string;
  imageLink?: string;
};

export type MyMessage = BaseMessage;
export type OtherMessage = { status: MessageStatus } & BaseMessage;
