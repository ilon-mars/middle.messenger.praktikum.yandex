import { Block } from '@/core/Block/index.ts';
import store from '@/core/Store/index.ts';

import { tmpl } from './index.tmpl.ts';

import { MainButton } from '@/components/Button/index.ts';
import { FileInput } from '@/components/Input/FileInput/index.ts';

import { UploadAvatarModalProps } from '@/types/index.ts';
import { UPLOAD_AVATAR, UPLOAD_AVATAR_STATE_TITLES } from '@/utils/index.ts';

import $style from './index.module.sass';

const updateModal = (_this: Block, notificationError: string | boolean, title?: string) => {
  _this.setProps({ notification: notificationError, ...(title && { title }) });
  _this.show();
};

export class UploadAvatarModal extends Block {
  constructor(props: UploadAvatarModalProps) {
    super({
      ...props,
      $style,
    });
  }

  init() {
    this.children.button = new MainButton({
      ...UPLOAD_AVATAR,
      events: {
        click: async e => {
          e?.preventDefault();

          const formName = 'avatar-form';
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const formData: FormData = new FormData(document.forms[formName as any] as HTMLFormElement);
          const hasFile = formData.entries().next().value[1].name;

          if (!hasFile) {
            updateModal(this, 'Нужно выбрать файл', UPLOAD_AVATAR_STATE_TITLES.error);
            return;
          }

          await this.props.callback(formData);

          if (store.state.user?.error) {
            updateModal(this, store.state.user.error, UPLOAD_AVATAR_STATE_TITLES.error);
          } else {
            this.hide();
            ((this.children.input as Block).element! as HTMLInputElement).value = '';
          }
        },
      },
    });

    this.children.input = new FileInput({
      events: {
        change: () => {
          updateModal(this, false, UPLOAD_AVATAR_STATE_TITLES.uploaded);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
