import { Block } from '@/core/Block';

import { tmpl } from './index.tmpl';

import { MainButton } from '@/components/Button';
import { Avatar } from '@/components/Avatar';
import { GoBack } from '@/components/GoBack';
import { Input } from '@/components/Input';

import { EditProfilePageProps } from '@/types';
import { PROFILE_AVATAR, SAVE_PROFILE_BUTTON, EDIT_PROFILE_INPUTS } from '@/utils';
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
    this.children.inputs = EDIT_PROFILE_INPUTS.map(item => new Input(item, 'profile-card'));
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
