import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
import { Input } from '@/components/Input';
import { GoBack } from '@/components/GoBack';

import { EditPasswordPageProps } from '@/types';
import { SAVE_PROFILE_BUTTON, EDIT_PASSWORD_INPUTS } from '@/utils';
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
    this.children.saveButton = new MainButton({
      ...SAVE_PROFILE_BUTTON,
      events: { click: () => console.log('Click') },
    });
    this.children.inputs = EDIT_PASSWORD_INPUTS.map(item => new Input(item, 'profile-card'));
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
