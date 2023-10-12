import { Attributes } from '../Attributes';

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
  events?: Record<string, (e?: Event) => void>;
  classes?: string[];
};

export type SearchInputProps = Omit<InputProps, 'labelText' | 'errorText'>;

export type MessageInputProps = Omit<InputProps, 'labelText' | 'errorText' | 'type'>;
