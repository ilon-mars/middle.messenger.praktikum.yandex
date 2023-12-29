import { Events } from '../Events';
import { ID } from '../requestData';

export type ChatItemProps = {
  id: ID;
  name: string;
  counter: number;
  avatarUrl: string;
  text: string | null;
  time: string | null;
  events?: Events;
};
