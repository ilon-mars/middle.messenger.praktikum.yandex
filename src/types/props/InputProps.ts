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
  labelText: string;
  name?: InputName;
  type?: InputType;
  value?: string;
  errorText?: string;
  events?: Record<string, () => void>;
};

export type SearchInputProps = Omit<InputProps, 'labelText' | 'errorText'>;

export type MessageInputProps = Omit<InputProps, 'labelText' | 'errorText' | 'type'>;
