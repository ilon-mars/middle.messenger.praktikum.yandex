import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
import { Avatar } from '@/components/Avatar';
import { GoBack } from '@/components/GoBack';
import { EmailInput, Input, LoginInput, NameInput, PhoneInput } from '@/components/Input';

import { EditProfilePageProps } from '@/types';
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
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';
import $inputStyle from '@/components/Input/index.module.sass';

export class EditProfilePage extends Block {
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

  constructor(props: EditProfilePageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
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
    this.children.goBack = new GoBack({ to: `/${LinkEnum.PROFILE}` });
    this.children.saveButton = new MainButton({
      ...SAVE_PROFILE_BUTTON,
      events: { click: () => console.log('Click') },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
