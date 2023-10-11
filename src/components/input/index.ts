import { Block } from '@/core/Block';

import { inputWithLabelTmpl } from './index.tmpl';

import { InputProps, SearchInputProps, MessageInputProps, InputField, InputWithLabelProps } from '@/types';
import { EMAIL_INPUT, LOGIN_INPUT, PASSWORD_INPUT, PHONE_INPUT, inRange, startsWithUpperCase } from '@/utils';

import $style from './index.module.sass';

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', {
      ...props,
      classes: [$style.input],
      $style,
    });
  }

  render() {
    return this.compile('', this.props);
  }

  // метод будет перезаписан
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  checkField(_value: string, _field: InputField) {}

  resetField(field: InputField) {
    field.value = '';
    field.isValid = false;
  }
}

export class NameInput extends Input {
  validations = {
    pattern: new RegExp(/^[А-я-]+|[A-z-]+$/i),
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: { ...props.attrs, type: 'text' },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && startsWithUpperCase(field.value);
  }
}

export class LoginInput extends Input {
  validations = {
    pattern: new RegExp(/^(?=.*[A-z])[0-9A-z_-]+$/),
    range: [3, 20] as [number, number],
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        name: LOGIN_INPUT.name,
        type: 'text',
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && inRange(field.value, this.validations.range);
  }
}

export class PasswordInput extends Input {
  validations = {
    pattern: new RegExp(/(?=.*[A-ZА-Я])(?=.*\d)/),
    range: [8, 40] as [number, number],
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        ...props.attrs,
        type: PASSWORD_INPUT.type,
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && inRange(field.value, this.validations.range);
  }
}

export class EmailInput extends Input {
  validations = {
    pattern: new RegExp(/[\w-.]+@([\w-]+\.)+[\w-]{2,4}/),
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        name: EMAIL_INPUT.name,
        type: EMAIL_INPUT.type,
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value);
  }
}

export class PhoneInput extends Input {
  validations = {
    pattern: new RegExp(/^[+]?\d+$/),
    range: [10, 15] as [number, number],
  };

  constructor(props: InputProps) {
    super({
      ...props,
      attrs: {
        name: PHONE_INPUT.name,
        type: PHONE_INPUT.type,
      },
    });
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = this.validations.pattern.test(field.value) && inRange(field.value, this.validations.range);
  }
}

export class SearchInput extends Block {
  constructor(props: SearchInputProps, $style: CSSModuleClasses) {
    super('input', {
      ...props,
      classes: [$style.searchInput],
      attrs: {
        placeholder: 'Поиск',
        name: 'search',
        type: 'search',
      },
      $style,
    });
  }

  render() {
    return this.compile('', this.props);
  }
}

export class MessageInput extends Block {
  constructor(props: MessageInputProps, $style: CSSModuleClasses) {
    super('textarea', {
      ...props,
      classes: [$style.messageInput],
      attrs: {
        name: 'message',
        placeholder: 'Сообщение',
      },
      $style,
    });
  }

  render() {
    return this.compile('{{value}}', this.props);
  }

  checkField(value: string, field: InputField) {
    field.value = value;
    field.isValid = !!field.value;
  }
}

export class InputWithLabel extends Block {
  constructor(props: InputWithLabelProps, className = '') {
    super('div', {
      ...props,
      classes: [$style.field, className],
      $style,
    });
  }

  render() {
    return this.compile(inputWithLabelTmpl, this.props);
  }
}
