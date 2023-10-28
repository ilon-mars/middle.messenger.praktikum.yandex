import { tmpl } from './index.tmpl';

import { Form } from '@/components/Form/Form';
import { DefaultButton, MainButton } from '@/components/Button';
import {
  EmailInput,
  Input,
  InputWithLabel,
  LoginInput,
  NameInput,
  PasswordInput,
  PhoneInput,
} from '@/components/Input';
import { Icon } from '@/components/Icon';

import { FormProps, InputField } from '@/types';
import {
  EMAIL_INPUT,
  LOGIN_INPUT,
  NAME_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
  REGISTER_BUTTON,
  REPEAT_PASSWORD_INPUT,
  SECOND_NAME_INPUT,
  onBlurHandler,
  onInputHandler,
} from '@/utils';

import $style from './index.module.sass';
import $wrapperStyle from '@/components/Input/InputWithLabel/index.module.sass';

const toggleActiveClass = (e?: Event) => {
  if (!e) {
    return;
  }

  const target = e.target as HTMLElement;
  const currentFieldset = target.closest(`.${$style.fieldset}`);
  currentFieldset?.classList.toggle($style.active);

  target
    .closest(`.${$style.form}`)
    ?.querySelectorAll(`.${$style.fieldset}`)
    .forEach(fieldset => {
      if (currentFieldset !== fieldset) {
        fieldset.classList.remove($style.active);
      }
    });
};

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
      $style,
    });
  }

  init() {
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

    const loginInput = new LoginInput({
      events: {
        blur: e => onBlurHandler(e, this.children.loginInput as Input, this.formData.login, $wrapperStyle.error),
        input: e => onInputHandler(e, this.children.loginInput as Input, this.formData.login, $wrapperStyle.error),
      },
    });

    const passwordInput = new PasswordInput({
      attrs: { name: PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.passwordInput as Input, this.formData.password, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.passwordInput as Input, this.formData.password, $wrapperStyle.error),
      },
    });

    const repeatPasswordInput = new PasswordInput({
      attrs: { name: REPEAT_PASSWORD_INPUT.name },
      events: {
        blur: e =>
          onBlurHandler(
            e,
            this.children.repeatPasswordInput as Input,
            this.formData.repeat_password,
            $wrapperStyle.error,
          ),
        input: e =>
          onInputHandler(
            e,
            this.children.repeatPasswordInput as Input,
            this.formData.repeat_password,
            $wrapperStyle.error,
          ),
      },
    });

    this.children.nameInput = new InputWithLabel({
      labelText: NAME_INPUT.labelText,
      input: nameInput,
      name: NAME_INPUT.name,
      errorText: NAME_INPUT.errorText,
    });

    this.children.secondNameInput = new InputWithLabel({
      labelText: SECOND_NAME_INPUT.labelText,
      input: secondNameInput,
      name: SECOND_NAME_INPUT.name,
      errorText: SECOND_NAME_INPUT.errorText,
    });

    this.children.emailInput = new InputWithLabel({
      labelText: EMAIL_INPUT.labelText,
      input: emailInput,
      name: EMAIL_INPUT.name,
      errorText: EMAIL_INPUT.errorText,
    });

    this.children.phoneInput = new InputWithLabel({
      labelText: PHONE_INPUT.labelText,
      input: phoneInput,
      name: PHONE_INPUT.name,
      errorText: PHONE_INPUT.errorText,
    });

    this.children.loginInput = new InputWithLabel({
      labelText: LOGIN_INPUT.labelText,
      input: loginInput,
      name: LOGIN_INPUT.name,
      errorText: LOGIN_INPUT.errorText,
    });

    this.children.passwordInput = new InputWithLabel({
      labelText: PASSWORD_INPUT.labelText,
      input: passwordInput,
      name: PASSWORD_INPUT.name,
      errorText: PASSWORD_INPUT.errorText,
    });

    this.children.repeatPasswordInput = new InputWithLabel({
      labelText: REPEAT_PASSWORD_INPUT.labelText,
      input: repeatPasswordInput,
      name: REPEAT_PASSWORD_INPUT.name,
      errorText: REPEAT_PASSWORD_INPUT.errorText,
    });

    this.children.personalButton = new DefaultButton({
      hasText: true,
      text: 'Личные данные',
      icon: new Icon({ name: 'arrow' }),
      events: {
        click: toggleActiveClass,
      },
    });

    this.children.accountButton = new DefaultButton({
      hasText: true,
      text: 'Данные профиля',
      icon: new Icon({ name: 'arrow' }),
      events: {
        click: toggleActiveClass,
      },
    });

    this.children.submitButton = new MainButton({
      ...REGISTER_BUTTON,
      icon: new Icon({ name: 'arrow-tail' }),
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
