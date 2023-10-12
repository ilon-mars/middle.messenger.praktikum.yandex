import { tmpl } from './index.tmpl';

import { Form } from '@/components/Form/Form';
import { MainButton } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Input, InputWithLabel, LoginInput, PasswordInput } from '@/components/Input';

import { FormProps, InputField } from '@/types';
import { LOGIN_BUTTON, LOGIN_INPUT, PASSWORD_INPUT, onBlurHandler, onInputHandler } from '@/utils';

import $style from './index.module.sass';
import $inputStyle from '@/components/Input/index.module.sass';

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
      classes: [$style.form],
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
      attrs: { name: PASSWORD_INPUT.name },
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
    return this.compile(tmpl, this.props);
  }
}
