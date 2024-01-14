import { tmpl } from './index.tmpl.ts';

import { MainButton } from '@/components/Button/index.ts';
import { Form } from '@/components/Form/Form.ts';
import { InputWithLabel, PasswordInput } from '@/components/Input/index.ts';
import { Input } from '@/components/Input/Input.ts';

import { FormProps, InputField } from '@/types/index.ts';
import {
  NEW_PASSWORD_INPUT,
  OLD_PASSWORD_INPUT,
  onBlurHandler,
  onInputHandler,
  REPEAT_NEW_PASSWORD_INPUT,
  SAVE_PROFILE_BUTTON,
} from '@/utils/index.ts';

import $wrapperStyle from '@/components/Input/InputWithLabel/index.module.sass';
import $style from './index.module.sass';

import arrowTailIcon from '@/assets/icons/arrow-tail.svg';

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
      $style,
    });
  }

  init() {
    const oldPassword = new PasswordInput({
      attrs: { name: OLD_PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.oldPassword as Input, this.formData.oldPassword, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.oldPassword as Input, this.formData.oldPassword, $wrapperStyle.error),
      },
    });

    const newPassword = new PasswordInput({
      attrs: { name: NEW_PASSWORD_INPUT.name },
      events: {
        blur: e => onBlurHandler(e, this.children.newPassword as Input, this.formData.newPassword, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.newPassword as Input, this.formData.newPassword, $wrapperStyle.error),
      },
    });

    const repeatPassword = new PasswordInput({
      attrs: { name: REPEAT_NEW_PASSWORD_INPUT.name },
      events: {
        blur: e =>
          onBlurHandler(e, this.children.repeatPassword as Input, this.formData.repeat_password, $wrapperStyle.error),
        input: e =>
          onInputHandler(e, this.children.repeatPassword as Input, this.formData.repeat_password, $wrapperStyle.error),
      },
    });

    this.children.oldPassword = new InputWithLabel(
      {
        labelText: OLD_PASSWORD_INPUT.labelText,
        input: oldPassword,
        name: OLD_PASSWORD_INPUT.name,
        errorText: OLD_PASSWORD_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.newPassword = new InputWithLabel(
      {
        labelText: NEW_PASSWORD_INPUT.labelText,
        input: newPassword,
        name: NEW_PASSWORD_INPUT.name,
        errorText: NEW_PASSWORD_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.repeatPassword = new InputWithLabel(
      {
        labelText: REPEAT_NEW_PASSWORD_INPUT.labelText,
        input: repeatPassword,
        name: REPEAT_NEW_PASSWORD_INPUT.name,
        errorText: REPEAT_NEW_PASSWORD_INPUT.errorText,
      },
      'profile-card',
    );

    this.children.saveButton = new MainButton({
      ...SAVE_PROFILE_BUTTON,
      icon: arrowTailIcon(),
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
