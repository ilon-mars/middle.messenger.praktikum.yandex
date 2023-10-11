import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { GoBack } from '@/components/GoBack';
import { EditProfileForm } from '@/components/Form';

import { EditProfilePageProps } from '@/types';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export class EditProfilePage extends Block {
  constructor(props: EditProfilePageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      $style,
    });
  }

  init() {
    this.children.goBack = new GoBack({ to: `/${LinkEnum.PROFILE}` });
    this.children.form = new EditProfileForm({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
