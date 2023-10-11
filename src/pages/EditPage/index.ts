import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { EditPageProps } from '@/types';
import { GoBack } from '@/components/GoBack';
import { EditPasswordForm, EditProfileForm, Form } from '@/components/Form';

import { LinkEnum } from '@/enums';
import { onSubmitHandler } from '@/utils';

import $style from './index.module.sass';

export class EditPage extends Block {
  constructor(props: EditPageProps) {
    super('section', {
      ...props,
      classes: [$style.wrapper],
    });
  }

  init() {
    const initOptions = {
      events: {
        submit: (e: SubmitEvent | undefined) => {
          const form = this.children.form as Form;

          onSubmitHandler(e, form);
        },
      },
    };

    this.children.goBack = new GoBack({ to: `/${LinkEnum.PROFILE}` });

    this.children.form = this.props.isPasswordEditing
      ? new EditPasswordForm(initOptions)
      : new EditProfileForm(initOptions);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
