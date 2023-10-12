import { tmpl } from './index.tmpl';

import { Form } from '@/components/Form/Form';
import { MainButton } from '@/components/Button';
import { Input, InputWithLabel, PasswordInput } from '@/components/Input';

import { FormProps, InputField } from '@/types';
import {
  NEW_PASSWORD_INPUT,
  OLD_PASSWORD_INPUT,
  REPEAT_NEW_PASSWORD_INPUT,
  SAVE_PROFILE_BUTTON,
  onBlurHandler,
  onInputHandler,
} from '@/utils';

import $style from './index.module.sass';
import $inputStyle from '@/components/Input/index.module.sass';

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
      classes: [$style.form],
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
    return this.compile(tmpl, this.props);
  }
}
