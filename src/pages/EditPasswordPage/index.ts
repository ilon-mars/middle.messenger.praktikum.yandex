import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
import { Input, PasswordInput } from '@/components/Input';
import { GoBack } from '@/components/GoBack';

import { EditPasswordPageProps } from '@/types';
import {
  SAVE_PROFILE_BUTTON,
  PASSWORD_INPUT,
  onBlurHandler,
  onInputHandler,
  NEW_PASSWORD_INPUT,
  REPEAT_NEW_PASSWORD_INPUT,
} from '@/utils';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';
import $inputStyle from '@/components/Input/index.module.sass';

export class EditPasswordPage extends Block {
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

  constructor(props: EditPasswordPageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      $style,
    });
  }

  init() {
    this.children.goBack = new GoBack({ to: `/${LinkEnum.PROFILE}` });
    this.children.saveButton = new MainButton({
      ...SAVE_PROFILE_BUTTON,
      events: { click: () => console.log('Click') },
    });
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
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
