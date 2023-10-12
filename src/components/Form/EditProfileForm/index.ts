import { tmpl } from './index.tmpl';

import { Form } from '@/components/Form/Form';
import { Avatar } from '@/components/Avatar';
import { MainButton } from '@/components/Button';
import { EmailInput, Input, InputWithLabel, LoginInput, NameInput, PhoneInput } from '@/components/Input';

import { FormProps, InputField } from '@/types';
import {
  DISPLAY_NAME_INPUT,
  EMAIL_INPUT,
  LOGIN_INPUT,
  NAME_INPUT,
  PHONE_INPUT,
  PROFILE_AVATAR,
  SAVE_PROFILE_BUTTON,
  SECOND_NAME_INPUT,
  onBlurHandler,
  onInputHandler,
} from '@/utils';

import $style from './index.module.sass';
import $wrapperStyle from '@/components/Input/InputWithLabel/index.module.sass';

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
      classes: [$style.form],
      $style,
    });
  }

  init() {
    const loginInput = new LoginInput({
      events: {
        blur: e => onBlurHandler(e, this.children.loginInput as Input, this.formData.login, $wrapperStyle.error),
        input: e => onInputHandler(e, this.children.loginInput as Input, this.formData.login, $wrapperStyle.error),
      },
    });

    const displayNameInput = new LoginInput({
      events: {
        blur: e =>
          onBlurHandler(e, this.children.displayNameInput as Input, this.formData.display_name, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.displayNameInput as Input, this.formData.display_name, $wrapperStyle.error),
      },
    });

    const nameInput = new NameInput({
      attrs: { name: NAME_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.nameInput as Input, this.formData.first_name, $wrapperStyle.error),
        input: e => onInputHandler(e, this.children.nameInput as Input, this.formData.first_name, $wrapperStyle.error),
      },
    });

    const secondNameInput = new NameInput({
      attrs: { name: SECOND_NAME_INPUT.name },
      events: {
        blur: e =>
          onBlurHandler(e, this.children.secondNameInput as Input, this.formData.second_name, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.secondNameInput as Input, this.formData.second_name, $wrapperStyle.error),
      },
    });

    const emailInput = new EmailInput({
      events: {
        blur: e => onBlurHandler(e, this.children.emailInput as Input, this.formData.email, $wrapperStyle.error),
        input: e => onInputHandler(e, this.children.emailInput as Input, this.formData.email, $wrapperStyle.error),
      },
    });

    const phoneInput = new PhoneInput({
      events: {
        blur: e => onBlurHandler(e, this.children.phoneInput as Input, this.formData.phone, $wrapperStyle.error),
        input: e => onInputHandler(e, this.children.phoneInput as Input, this.formData.phone, $wrapperStyle.error),
      },
    });

    this.children.loginInput = new InputWithLabel(
      {
        labelText: LOGIN_INPUT.labelText,
        input: loginInput,
        name: LOGIN_INPUT.name,
        errorText: LOGIN_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.displayNameInput = new InputWithLabel(
      {
        labelText: DISPLAY_NAME_INPUT.labelText,
        input: displayNameInput,
        name: DISPLAY_NAME_INPUT.name,
        errorText: DISPLAY_NAME_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.nameInput = new InputWithLabel(
      {
        labelText: NAME_INPUT.labelText,
        input: nameInput,
        name: NAME_INPUT.name,
        errorText: NAME_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.secondNameInput = new InputWithLabel(
      {
        labelText: SECOND_NAME_INPUT.labelText,
        input: secondNameInput,
        name: SECOND_NAME_INPUT.name,
        errorText: SECOND_NAME_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.emailInput = new InputWithLabel(
      {
        labelText: EMAIL_INPUT.labelText,
        input: emailInput,
        name: EMAIL_INPUT.name,
        errorText: EMAIL_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.phoneInput = new InputWithLabel(
      {
        labelText: PHONE_INPUT.labelText,
        input: phoneInput,
        name: PHONE_INPUT.name,
        errorText: PHONE_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.avatar = new Avatar(PROFILE_AVATAR);
    this.children.saveButton = new MainButton(SAVE_PROFILE_BUTTON);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
