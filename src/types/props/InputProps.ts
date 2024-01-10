import { Attributes } from '../Attributes.ts';
import { Events } from '../Events.ts';

type InputName =
  | 'first_name'
  | 'second_name'
  | 'login'
  | 'email'
  | 'phone'
  | 'password'
  | 'search'
  | 'message'
  | 'repeat_password'
  | 'oldPassword'
  | 'newPassword'
  | 'display_name';

type InputType = 'text' | 'email' | 'password' | 'tel' | 'search';

export type InputProps = {
  attrs?: Attributes & { name?: InputName };
  type?: InputType;
  value?: string;
  events?: Events;
  classes?: string[];
};

export type SearchInputProps = Omit<InputProps, 'labelText' | 'errorText'>;

export type MessageInputProps = Omit<InputProps, 'labelText' | 'errorText' | 'type'>;

export type FileInputProps = Pick<InputProps, 'events'>;
