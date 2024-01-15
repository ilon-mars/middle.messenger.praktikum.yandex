import { Events } from '../Events.ts';
import { ID } from '../requestData/index.ts';

export type ChatItemProps = {
  id: ID;
  name: string;
  counter: number;
  avatarUrl: string;
  text: string | null;
  time: string | null;
  events?: Events;
};
