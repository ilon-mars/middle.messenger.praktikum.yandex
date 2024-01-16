import { Events } from '../Events.ts';

export type AvatarProps = {
  src?: string;
  name?: string;
  events?: Events;
  isClickable?: boolean;
};
