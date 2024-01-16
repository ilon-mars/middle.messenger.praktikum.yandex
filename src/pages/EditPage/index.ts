import { Block } from '@/core/Block/index.ts';
import store, { State, withStore } from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { Form } from '@/components/Form/Form.ts';
import { EditPasswordForm, EditProfileForm } from '@/components/Form/index.ts';

import { GoBack } from '@/components/GoBack/index.ts';

import UserController from '@/controllers/UserController.ts';

import { EditPageProps, User, UserPasswordData } from '@/types/index.ts';
import { onSubmitHandler, showNotification } from '@/utils/index.ts';

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
    return {};
  }

  return { ...state.user } as EditPageProps;
}

export const EditPage = withStore(Edit, mapStateToProps);
