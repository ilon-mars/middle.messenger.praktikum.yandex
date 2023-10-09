import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
// import { Input } from '@/components/Input';

import { EditPasswordPageProps } from '@/types';
import { SAVE_PROFILE_BUTTON } from '@/utils';
// import { EDIT_PASSWORD_INPUTS } from '@/utils';

import $style from './index.module.sass';
import { GoBack } from '@/components/GoBack';
import { LinkEnum } from '@/enums';

export class EditPasswordPage extends Block {
  constructor(props: EditPasswordPageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      $style,
    });
  }

  init() {
    // this.children.inputs = EDIT_PASSWORD_INPUTS.map(item => new Input(item, 'profile-card')).join(' ');
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
