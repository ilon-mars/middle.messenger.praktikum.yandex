import { tmpl } from './index.tmpl.ts';

import { MainButton } from '@/components/Button/index.ts';
import { Form } from '@/components/Form/Form.ts';
import { Input } from '@/components/Input/Input.ts';
import { InputWithLabel, LoginInput, PasswordInput } from '@/components/Input/index.ts';

import { FormProps, InputField } from '@/types/index.ts';
import { LOGIN_BUTTON, LOGIN_INPUT, PASSWORD_INPUT, onBlurHandler, onInputHandler } from '@/utils/index.ts';

import $wrapperStyle from '@/components/Input/InputWithLabel/index.module.sass';
import $style from './index.module.sass';

import arrowTailIcon from '@/assets/icons/arrow-tail.svg';

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

    const passwordInput = new PasswordInput({
      attrs: { name: PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.passwordInput as Input, this.formData.password, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.passwordInput as Input, this.formData.password, $wrapperStyle.error),
      },
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

    this.children.submitButton = new MainButton({
      ...LOGIN_BUTTON,
      icon: arrowTailIcon,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
