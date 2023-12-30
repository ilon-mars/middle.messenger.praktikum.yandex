import { Attributes } from '../Attributes';
import { Events } from '../Events';

export type FormProps = {
  name?: string;
  classes?: string[];
  attrs?: Attributes;
  events?: Events;
  $style?: CSSModuleClasses;
};
