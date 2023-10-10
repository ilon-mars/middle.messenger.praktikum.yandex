import { Block } from '@/core/Block';

import { loginTmpl, registerTmpl } from './index.tmpl';

import { MainButton, Button } from '@/components/Button';
import { EmailInput, Input, LoginInput, NameInput, PasswordInput, PhoneInput } from '@/components/Input';
import { Link } from '@/components/Link';
import { Icon } from '@/components/Icon';

import { ModalProps } from '@/types';
import { onBlurHandler, onInputHandler } from '@/utils';
import {
  EMAIL_INPUT,
  LOGIN_BUTTON,
  LOGIN_INPUT,
  LOGIN_LINK,
  NAME_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
  REGISTER_BUTTON,
  REGISTER_LINK,
  REPEAT_PASSWORD_INPUT,
  SECOND_NAME_INPUT,
} from '@/utils/constants';

import $style from './index.module.sass';
import $inputStyle from '@/components/Input/index.module.sass';

abstract class Modal extends Block {
  constructor(props: ModalProps) {
    super('dialog', {
      ...props,
      classes: [$style.modal],
      $style,
    });
  }
}

export class LoginModal extends Modal {
  #formData = {
    login: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  };

  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.loginInput = new LoginInput({
      ...LOGIN_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.loginInput as Input, this.#formData.login, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.loginInput as Input, this.#formData.login, $inputStyle);
          }
        },
      },
    });
    this.children.passwordInput = new PasswordInput({
      ...PASSWORD_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.passwordInput as Input, this.#formData.password, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.passwordInput as Input, this.#formData.password, $inputStyle);
          }
        },
      },
    });

    this.children.submitButton = new MainButton({
      ...LOGIN_BUTTON,
      icon: new Icon({ name: 'arrow-tail' }),
      events: { click: () => console.log('Click') },
    });

    this.children.link = new Link(LOGIN_LINK);
  }

  render() {
    return this.compile(loginTmpl, this.props);
  }
}

export class RegisterModal extends Modal {
  #formData = {
    first_name: {
      value: '',
      isValid: false,
    },
    second_name: {
      value: '',
      isValid: false,
    },
    email: {
      value: '',
      isValid: false,
    },
    phone: {
      value: '',
      isValid: false,
    },
    login: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
    repeat_password: {
      value: '',
      isValid: false,
    },
  };

  constructor(props: ModalProps) {
    super(props);
  }

  init() {
    this.children.nameInput = new NameInput({
      ...NAME_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.nameInput as Input, this.#formData.first_name, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.nameInput as Input, this.#formData.first_name, $inputStyle);
          }
        },
      },
    });
    this.children.secondNameInput = new NameInput({
      ...SECOND_NAME_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.secondNameInput as Input, this.#formData.second_name, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.secondNameInput as Input, this.#formData.second_name, $inputStyle);
          }
        },
      },
    });
    this.children.emailInput = new EmailInput({
      ...EMAIL_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.emailInput as Input, this.#formData.email, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.emailInput as Input, this.#formData.email, $inputStyle);
          }
        },
      },
    });
    this.children.phoneInput = new PhoneInput({
      ...PHONE_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.phoneInput as Input, this.#formData.phone, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.phoneInput as Input, this.#formData.phone, $inputStyle);
          }
        },
      },
    });
    this.children.loginInput = new LoginInput({
      ...LOGIN_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.loginInput as Input, this.#formData.login, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.loginInput as Input, this.#formData.login, $inputStyle);
          }
        },
      },
    });
    this.children.passwordInput = new PasswordInput({
      ...PASSWORD_INPUT,
      events: {
        focusout: e => {
          if (e) {
            onBlurHandler(e, this.children.passwordInput as Input, this.#formData.password, $inputStyle);
          }
        },
        input: e => {
          if (e) {
            onInputHandler(e, this.children.passwordInput as Input, this.#formData.password, $inputStyle);
          }
        },
      },
    });
    this.children.repeatPasswordInput = new PasswordInput({
      ...REPEAT_PASSWORD_INPUT,
      events: {
        focusout: e => {
          const target = e?.target;

          if (target) {
            this.#formData.repeat_password.value = (target as HTMLInputElement).value;
            this.#formData.repeat_password.isValid =
              this.#formData.password.value === this.#formData.repeat_password.value;
            this.#formData.repeat_password.isValid
              ? (target as HTMLInputElement).classList.remove($inputStyle.error)
              : (target as HTMLInputElement).classList.add($inputStyle.error);
          }
        },
        input: e => {
          const target = e?.target;

          if (target) {
            (target as HTMLInputElement).classList.remove($style.error);
            this.#formData.repeat_password.value = (target as HTMLInputElement).value;
            this.#formData.repeat_password.isValid =
              this.#formData.password.value === this.#formData.repeat_password.value;
          }
        },
      },
    });

    this.children.personalButton = new Button({
      text: 'Личные данные',
      icon: new Icon({ name: 'arrow' }),
      events: { click: () => console.log('Click') },
    });

    this.children.accountButton = new Button({
      text: 'Данные профиля',
      icon: new Icon({ name: 'arrow' }),
      events: { click: () => console.log('Click') },
    });

    this.children.submitButton = new MainButton({
      ...REGISTER_BUTTON,
      icon: new Icon({ name: 'arrow-tail' }),
      events: { click: () => console.log('Click') },
    });

    this.children.link = new Link(REGISTER_LINK);
  }

  render() {
    return this.compile(registerTmpl, this.props);
  }
}
