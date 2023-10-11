import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { GoBack } from '@/components/GoBack';
import { EditPasswordForm } from '@/components/Form';

import { EditPasswordPageProps } from '@/types';
import { LinkEnum } from '@/enums';

import $style from './index.module.sass';

export class EditPasswordPage extends Block {
  constructor(props: EditPasswordPageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      $style,
    });
  }

  init() {
    this.children.goBack = new GoBack({ to: `/${LinkEnum.PROFILE}` });
    this.children.form = new EditPasswordForm({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
