import store, { State, withStore } from '@/core/Store';
import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { GoBack } from '@/components/GoBack';
import { EditPasswordForm, EditProfileForm, Form } from '@/components/Form';

import UserController from '@/controllers/UserController';

import { onSubmitHandler, showNotification } from '@/utils';
import { EditPageProps, User, UserPasswordData } from '@/types';

import $style from './index.module.sass';

const changeProfile = async (data: User) => {
  await UserController.changeUserData(data);
};

const changePassword = async (data: UserPasswordData) => {
  await UserController.changePassword(data);
};

class Edit extends Block {
  constructor(props: EditPageProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.goBack = new GoBack();

    this.children.form = this.props.isPasswordEditing
      ? new EditPasswordForm({
          events: {
            submit: async e => {
              const form = this.children.form as Form;

              await onSubmitHandler({ e, form, callback: changePassword });

              showNotification(this, store);
            },
          },
        })
      : new EditProfileForm({
          events: {
            submit: async e => {
              const form = this.children.form as Form;

              await onSubmitHandler({ e, form, callback: changeProfile, shouldResetForm: false });

              showNotification(this, store);
            },
          },
        });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State) {
  if (!state || !state.user) {
    return;
  }

  return { ...state.user };
}

export const EditPage = withStore(Edit, mapStateToProps);
