import { Block } from '@/core/Block';

import { baseInputTmpl, searchInputTmpl, messageInputTmpl } from './index.tmpl';

import { InputProps, SearchInputProps, MessageInputProps } from '@/types';
import { EMAIL_INPUT, LOGIN_INPUT, PASSWORD_INPUT, PHONE_INPUT } from '@/utils';

import $style from './index.module.sass';

export class Input extends Block {
  constructor(props: InputProps, className: string = '') {
    super('div', {
      ...props,
      classes: [$style.field, className],
      $style,
    });
  }

  render() {
    return this.compile(baseInputTmpl, this.props);
  }
}

export class NameInput extends Input {
  constructor(props: InputProps, className: string = '') {
    super({ ...props, type: 'text' }, className);
  }
}

export class LoginInput extends Input {
  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: LOGIN_INPUT.name, type: 'text' }, className);
  }
}

export class PasswordInput extends Input {
  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: PASSWORD_INPUT.name, type: PASSWORD_INPUT.type }, className);
  }
}

export class EmailInput extends Input {
  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: EMAIL_INPUT.name, type: EMAIL_INPUT.type }, className);
  }
}

export class PhoneInput extends Input {
  constructor(props: InputProps, className: string = '') {
    super({ ...props, name: PHONE_INPUT.name, type: PHONE_INPUT.type }, className);
  }
}

export class SearchInput extends Block {
  constructor(props: SearchInputProps, $style: CSSModuleClasses) {
    super('form', {
      ...props,
      classes: [$style.searchWrapper],
      $style,
    });
  }

  render() {
    return this.compile(searchInputTmpl, this.props);
  }
}

export class MessageInput extends Block {
  constructor(props: MessageInputProps, $style: CSSModuleClasses) {
    super('form', {
      ...props,
      classes: [$style.messageForm],
      $style,
    });
  }

  render() {
    return this.compile(messageInputTmpl, this.props);
  }
}
