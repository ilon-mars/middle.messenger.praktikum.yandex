import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { Button } from '@/components/Button';
// import { Input } from '@/components/Input';

import { EditProfilePageProps } from '@/types';
import { PROFILE_AVATAR, SAVE_PROFILE_BUTTON } from '@/utils';
// import { EDIT_PASSWORD_INPUTS } from '@/utils';

import $style from './index.module.sass';
import { Avatar } from '@/components/Avatar';

export class EditProfilePage extends Block {
  constructor(props: EditProfilePageProps) {
    super('main', {
      ...props,
      classes: [$style.container, 'main-layout'],
      $style,
    });
  }

  init() {
    // this.children.inputs = EDIT_PASSWORD_INPUTS.map(item => new Input(item, 'profile-card')).join(' ');
    this.children.avatar = new Avatar(PROFILE_AVATAR);
    this.children.saveButton = new Button({
      ...SAVE_PROFILE_BUTTON,
      hasIcon: true,
      events: { click: () => console.log('Click') },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
