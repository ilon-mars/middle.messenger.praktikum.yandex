import { Block } from '@/core/Block';

import { editPasswordTmpl, editProfileTmpl, loginTmpl, messageTmpl, registerTmpl, searchTmpl } from './index.tmpl';

import { Button, MainButton } from '@/components/Button';
import {
  EmailInput,
  Input,
  InputWithLabel,
  LoginInput,
  MessageInput,
  NameInput,
  PasswordInput,
  PhoneInput,
  SearchInput,
} from '@/components/Input';
import { Icon } from '@/components/Icon';
import { Avatar } from '@/components/Avatar';

import { FormProps, InputField } from '@/types';
import {
  DISPLAY_NAME_INPUT,
  EMAIL_INPUT,
  LOGIN_BUTTON,
  LOGIN_INPUT,
  NAME_INPUT,
  NEW_PASSWORD_INPUT,
  OLD_PASSWORD_INPUT,
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

export class Form extends Block {
  formData: Record<string, InputField> | undefined;

  constructor(props: FormProps) {
    super('form', props);
  }
}

export class LoginForm extends Form {
  formData: Record<string, InputField> = {
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
    const loginInput = new LoginInput({
      events: {
        blur: e => onBlurHandler(e, this.children.loginInput as Input, this.formData.login, $inputStyle),
        input: e => onInputHandler(e, this.children.loginInput as Input, this.formData.login, $inputStyle),
      },
    });

    const passwordInput = new PasswordInput({
      events: {
        blur: e => onBlurHandler(e, this.children.passwordInput as Input, this.formData.password, $inputStyle),
        input: e => onInputHandler(e, this.children.passwordInput as Input, this.formData.password, $inputStyle),
      },
    });

    this.children.loginInput = new InputWithLabel({
      labelText: LOGIN_INPUT.labelText,
      input: loginInput,
      name: LOGIN_INPUT.name,
    });

    this.children.passwordInput = new InputWithLabel({
      labelText: PASSWORD_INPUT.labelText,
      input: passwordInput,
      name: PASSWORD_INPUT.name,
    });

    this.children.submitButton = new MainButton({
      ...LOGIN_BUTTON,
      icon: new Icon({ name: 'arrow-tail' }),
    });
  }

  render() {
    return this.compile(loginTmpl, this.props);
  }
}

export class RegisterForm extends Form {
  formData: Record<string, InputField> = {
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
    const nameInput = new NameInput({
      attrs: { name: NAME_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.nameInput as Input, this.formData.first_name, $inputStyle),
        input: e => onInputHandler(e, this.children.nameInput as Input, this.formData.first_name, $inputStyle),
      },
    });

    const secondNameInput = new NameInput({
      attrs: { name: SECOND_NAME_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.secondNameInput as Input, this.formData.second_name, $inputStyle),
        input: e => onInputHandler(e, this.children.secondNameInput as Input, this.formData.second_name, $inputStyle),
      },
    });

    const emailInput = new EmailInput({
      events: {
        blur: e => onBlurHandler(e, this.children.emailInput as Input, this.formData.email, $inputStyle),
        input: e => onInputHandler(e, this.children.emailInput as Input, this.formData.email, $inputStyle),
      },
    });

    const phoneInput = new PhoneInput({
      events: {
        blur: e => onBlurHandler(e, this.children.phoneInput as Input, this.formData.phone, $inputStyle),
        input: e => onInputHandler(e, this.children.phoneInput as Input, this.formData.phone, $inputStyle),
      },
    });

    const loginInput = new LoginInput({
      ...LOGIN_INPUT,
      events: {
        blur: e => onBlurHandler(e, this.children.loginInput as Input, this.formData.login, $inputStyle),
        input: e => onInputHandler(e, this.children.loginInput as Input, this.formData.login, $inputStyle),
      },
    });

    const passwordInput = new PasswordInput({
      ...PASSWORD_INPUT,
      events: {
        blur: e => onBlurHandler(e, this.children.passwordInput as Input, this.formData.password, $inputStyle),
        input: e => onInputHandler(e, this.children.passwordInput as Input, this.formData.password, $inputStyle),
      },
    });

    const repeatPasswordInput = new PasswordInput({
      ...REPEAT_PASSWORD_INPUT,
      events: {
        blur: e =>
          onBlurHandler(e, this.children.repeatPasswordInput as Input, this.formData.repeat_password, $inputStyle),
        input: e =>
          onInputHandler(e, this.children.repeatPasswordInput as Input, this.formData.repeat_password, $inputStyle),
      },
    });

    this.children.nameInput = new InputWithLabel({
      labelText: NAME_INPUT.labelText,
      input: nameInput,
      name: NAME_INPUT.name,
    });

    this.children.secondNameInput = new InputWithLabel({
      labelText: SECOND_NAME_INPUT.labelText,
      input: secondNameInput,
      name: SECOND_NAME_INPUT.name,
    });

    this.children.emailInput = new InputWithLabel({
      labelText: EMAIL_INPUT.labelText,
      input: emailInput,
      name: EMAIL_INPUT.name,
    });

    this.children.phoneInput = new InputWithLabel({
      labelText: PHONE_INPUT.labelText,
      input: phoneInput,
      name: PHONE_INPUT.name,
    });

    this.children.loginInput = new InputWithLabel({
      labelText: LOGIN_INPUT.labelText,
      input: loginInput,
      name: LOGIN_INPUT.name,
    });

    this.children.passwordInput = new InputWithLabel({
      labelText: PASSWORD_INPUT.labelText,
      input: passwordInput,
      name: PASSWORD_INPUT.name,
    });

    this.children.repeatPasswordInput = new InputWithLabel({
      labelText: REPEAT_PASSWORD_INPUT.labelText,
      input: repeatPasswordInput,
      name: REPEAT_PASSWORD_INPUT.name,
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
    });
  }

  render() {
    return this.compile(registerTmpl, this.props);
  }
}

export class SearchForm extends Form {
  search = '';

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

            this.search = (target as HTMLInputElement).value || '';
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
  formData: Record<string, InputField> = {
    message: {
      value: '',
      isValid: false,
    },
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
          blur: e => onBlurHandler(e, this.children.messageInput as Input, this.formData.message, $style),
          input: e => onInputHandler(e, this.children.messageInput as Input, this.formData.message, $style),
        },
      },
      $style,
    );
  }

  render() {
    return this.compile(messageTmpl, this.props);
  }
}

export class EditPasswordForm extends Form {
  formData: Record<string, InputField> = {
    oldPassword: {
      value: '',
      isValid: false,
    },
    newPassword: {
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
      classes: [$style.editPasswordContent],
      $style,
    });
  }

  init() {
    const oldPassword = new PasswordInput({
      attrs: { name: OLD_PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.oldPassword as Input, this.formData.oldPassword, $inputStyle),
        input: e => onInputHandler(e, this.children.oldPassword as Input, this.formData.oldPassword, $inputStyle),
      },
    });

    const newPassword = new PasswordInput({
      attrs: { name: NEW_PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.newPassword as Input, this.formData.newPassword, $inputStyle),
        input: e => onInputHandler(e, this.children.newPassword as Input, this.formData.newPassword, $inputStyle),
      },
    });

    const repeatPassword = new PasswordInput({
      attrs: { name: REPEAT_NEW_PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.repeatPassword as Input, this.formData.repeat_password, $inputStyle),
        input: e =>
          onInputHandler(e, this.children.repeatPassword as Input, this.formData.repeat_password, $inputStyle),
      },
    });

    this.children.oldPassword = new InputWithLabel(
      {
        labelText: OLD_PASSWORD_INPUT.labelText,
        input: oldPassword,
        name: OLD_PASSWORD_INPUT.name,
      },
      'profile-card',
    );

    this.children.newPassword = new InputWithLabel(
      {
        labelText: NEW_PASSWORD_INPUT.labelText,
        input: newPassword,
        name: NEW_PASSWORD_INPUT.name,
      },
      'profile-card',
    );

    this.children.repeatPassword = new InputWithLabel(
      {
        labelText: REPEAT_NEW_PASSWORD_INPUT.labelText,
        input: repeatPassword,
        name: REPEAT_NEW_PASSWORD_INPUT.name,
      },
      'profile-card',
    );

    this.children.saveButton = new MainButton(SAVE_PROFILE_BUTTON);
  }

  render() {
    return this.compile(editPasswordTmpl, this.props);
  }
}

export class EditProfileForm extends Form {
  formData: Record<string, InputField> = {
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
    const loginInput = new LoginInput({
      events: {
        blur: e => onBlurHandler(e, this.children.loginInput as Input, this.formData.login, $inputStyle),
        input: e => onInputHandler(e, this.children.loginInput as Input, this.formData.login, $inputStyle),
      },
    });

    const displayNameInput = new LoginInput({
      events: {
        blur: e => onBlurHandler(e, this.children.displayNameInput as Input, this.formData.display_name, $inputStyle),
        input: e => onInputHandler(e, this.children.displayNameInput as Input, this.formData.display_name, $inputStyle),
      },
    });

    const nameInput = new NameInput({
      attrs: { name: NAME_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.nameInput as Input, this.formData.first_name, $inputStyle),
        input: e => onInputHandler(e, this.children.nameInput as Input, this.formData.first_name, $inputStyle),
      },
    });

    const secondNameInput = new NameInput({
      attrs: { name: SECOND_NAME_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.secondNameInput as Input, this.formData.second_name, $inputStyle),
        input: e => onInputHandler(e, this.children.secondNameInput as Input, this.formData.second_name, $inputStyle),
      },
    });

    const emailInput = new EmailInput({
      events: {
        blur: e => onBlurHandler(e, this.children.emailInput as Input, this.formData.email, $inputStyle),
        input: e => onInputHandler(e, this.children.emailInput as Input, this.formData.email, $inputStyle),
      },
    });

    const phoneInput = new PhoneInput({
      events: {
        blur: e => onBlurHandler(e, this.children.phoneInput as Input, this.formData.phone, $inputStyle),
        input: e => onInputHandler(e, this.children.phoneInput as Input, this.formData.phone, $inputStyle),
      },
    });

    this.children.loginInput = new InputWithLabel(
      {
        labelText: LOGIN_INPUT.labelText,
        input: loginInput,
        name: LOGIN_INPUT.name,
      },
      'profile-card',
    );

    this.children.displayNameInput = new InputWithLabel(
      {
        labelText: DISPLAY_NAME_INPUT.labelText,
        input: displayNameInput,
        name: DISPLAY_NAME_INPUT.name,
      },
      'profile-card',
    );

    this.children.nameInput = new InputWithLabel(
      {
        labelText: NAME_INPUT.labelText,
        input: nameInput,
        name: NAME_INPUT.name,
      },
      'profile-card',
    );

    this.children.secondNameInput = new InputWithLabel(
      {
        labelText: SECOND_NAME_INPUT.labelText,
        input: secondNameInput,
        name: SECOND_NAME_INPUT.name,
      },
      'profile-card',
    );

    this.children.emailInput = new InputWithLabel(
      {
        labelText: EMAIL_INPUT.labelText,
        input: emailInput,
        name: EMAIL_INPUT.name,
      },
      'profile-card',
    );

    this.children.phoneInput = new InputWithLabel(
      {
        labelText: PHONE_INPUT.labelText,
        input: phoneInput,
        name: PHONE_INPUT.name,
      },
      'profile-card',
    );

    this.children.avatar = new Avatar(PROFILE_AVATAR);
    this.children.saveButton = new MainButton(SAVE_PROFILE_BUTTON);
  }

  render() {
    return this.compile(editProfileTmpl, this.props);
  }
}
