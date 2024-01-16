import { Attributes } from '../Attributes.ts';
import { Events } from '../Events.ts';

export type FormProps = {
  name?: string;
  classes?: string[];
  attrs?: Attributes;
  events?: Events;
  $style?: CSSModuleClasses;
};
