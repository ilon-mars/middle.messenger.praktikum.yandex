import { Block } from '@/core/Block';

import { editPasswordTmpl, editProfileTmpl, loginTmpl, messageForm, registerTmpl, searchTmpl } from './index.tmpl';

import { Button, MainButton } from '@/components/Button';
import {
  EmailInput,
  Input,
  LoginInput,
  MessageInput,
  NameInput,
  PasswordInput,
  PhoneInput,
  SearchInput,
} from '@/components/Input';
import { Icon } from '@/components/Icon';
import { Avatar } from '@/components/Avatar';

import { FormProps } from '@/types';
import {
  DISPLAY_NAME_INPUT,
  EMAIL_INPUT,
  LOGIN_BUTTON,
  LOGIN_INPUT,
  NAME_INPUT,
  NEW_PASSWORD_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
  PROFILE_AVATAR,
  REGISTER_BUTTON,
  REPEAT_NEW_PASSWORD_INPUT,
  REPEAT_PASSWORD_INPUT,
  SAVE_PROFILE_BUTTON,
  SECOND_NAME_INPUT,
  onBlurHandler,
  onInputHandler,
} from '@/utils';

import $style from './index.module.sass';
import $inputStyle from '@/components/Input/index.module.sass';
import { Avatar } from '../Avatar';

abstract class Form extends Block {
  constructor(props: FormProps) {
    super('form', props);
  }
}

export class LoginForm extends Form {
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

  constructor(props: FormProps) {
    super({
      ...props,
      classes: [$style.loginForm],
      $style,
    });
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
  }

  render() {
    return this.compile(loginTmpl, this.props);
  }
}

export class RegisterForm extends Form {
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

  constructor(props: FormProps) {
    super({
      ...props,
      classes: [$style.registerForm],
      $style,
    });
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
  }

  render() {
    return this.compile(registerTmpl, this.props);
  }
}

export class SearchForm extends Form {
  #search = '';

  constructor(props: FormProps) {
    super({
      ...props,
      classes: [$style.searchForm],
      $style,
    });
  }

  init() {
    this.children.searchInput = new SearchInput(
      {
        value: '',
        events: {
          input: e => {
            const target = e?.target;

            this.#search = (target as HTMLInputElement).value || '';
          },
        },
      },
      $style,
    );
  }

  render() {
    return this.compile(searchTmpl, this.props);
  }
}

export class MessageForm extends Form {
  #message = {
    value: '',
    isValid: false,
  };

  constructor(props: FormProps) {
    super({
      ...props,
      classes: [$style.messageForm],
      $style,
    });
  }

  init() {
    this.children.messageInput = new MessageInput(
      {
        value: '',
        events: {
          blur: e => {
            if (e) {
              onBlurHandler(e, this.children.messageInput as Input, this.#message, $style);
            }
          },
          input: e => {
            if (e) {
              onInputHandler(e, this.children.messageInput as Input, this.#message, $style);
            }
          },
        },
      },
      $style,
    );
  }

  render() {
    return this.compile(messageForm, this.props);
  }
}

export class EditPasswordForm extends Form {
  #formData = {
    oldPassword: {
      value: '',
      isValid: false,
    },
    newPassword: {
      value: '',
      isValid: false,
    },
    repeatPassword: {
      value: '',
      isValid: false,
    },
  };

  constructor(props: FormProps) {
    super({
      ...props,
      classes: [$style.editPasswordContent],
      $style,
    });
  }

  init() {
    this.children.oldPassword = new PasswordInput(
      {
        ...PASSWORD_INPUT,
        events: {
          focusout: e => {
            if (e) {
              onBlurHandler(e, this.children.oldPassword as Input, this.#formData.oldPassword, $inputStyle);
            }
          },
          input: e => {
            if (e) {
              onInputHandler(e, this.children.oldPassword as Input, this.#formData.oldPassword, $inputStyle);
            }
          },
        },
      },
      'profile-card',
    );
    this.children.newPassword = new PasswordInput(
      {
        ...NEW_PASSWORD_INPUT,
        events: {
          focusout: e => {
            if (e) {
              onBlurHandler(e, this.children.newPassword as Input, this.#formData.newPassword, $inputStyle);
            }
          },
          input: e => {
            if (e) {
              onInputHandler(e, this.children.newPassword as Input, this.#formData.newPassword, $inputStyle);
            }
          },
        },
      },
      'profile-card',
    );
    this.children.repeatPassword = new PasswordInput(
      {
        ...REPEAT_NEW_PASSWORD_INPUT,
        events: {
          focusout: e => {
            if (e) {
              onBlurHandler(e, this.children.repeatPassword as Input, this.#formData.repeatPassword, $inputStyle);
            }
          },
          input: e => {
            if (e) {
              onInputHandler(e, this.children.repeatPassword as Input, this.#formData.repeatPassword, $inputStyle);
            }
          },
        },
      },
      'profile-card',
    );
    this.children.saveButton = new MainButton({
      ...SAVE_PROFILE_BUTTON,
      events: { click: () => console.log('Click') },
    });
  }

  render() {
    return this.compile(editPasswordTmpl, this.props);
  }
}

export class EditProfileForm extends Form {
  #formData = {
    first_name: {
      value: '',
      isValid: false,
    },
    second_name: {
      value: '',
      isValid: false,
    },
    display_name: {
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
  };

  constructor(props: FormProps) {
    super({
      ...props,
      classes: [$style.editProfileContent],
      $style,
    });
  }

  init() {
    this.children.loginInput = new LoginInput(
      {
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
      },
      'profile-card',
    );
    this.children.displayNameInput = new NameInput(
      {
        ...DISPLAY_NAME_INPUT,
        events: {
          focusout: e => {
            if (e) {
              onBlurHandler(e, this.children.displayNameInput as Input, this.#formData.display_name, $inputStyle);
            }
          },
          input: e => {
            if (e) {
              onInputHandler(e, this.children.displayNameInput as Input, this.#formData.display_name, $inputStyle);
            }
          },
        },
      },
      'profile-card',
    );
    this.children.nameInput = new NameInput(
      {
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
      },
      'profile-card',
    );
    this.children.secondNameInput = new NameInput(
      {
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
      },
      'profile-card',
    );
    this.children.emailInput = new EmailInput(
      {
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
      },
      'profile-card',
    );
    this.children.phoneInput = new PhoneInput(
      {
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
      },
      'profile-card',
    );

    this.children.avatar = new Avatar(PROFILE_AVATAR);
    this.children.saveButton = new MainButton({
      ...SAVE_PROFILE_BUTTON,
      events: { click: () => console.log('Click') },
    });
  }

  render() {
    return this.compile(editProfileTmpl, this.props);
  }
}
