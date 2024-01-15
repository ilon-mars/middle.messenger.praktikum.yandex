import { Attributes } from '../Attributes.ts';
import { Events } from '../Events.ts';

export type ButtonProps = {
  hasText: boolean;
  icon?: string;
  attrs?: Attributes & { type?: 'submit' | 'button' };
  events?: Events;
  text?: string;
};
