import { Events } from '../Events';
import { ButtonProps } from './ButtonProps';

export type ModalProps = {
  title: string;
  events?: Events;
};

export type ManageChatModalProps = ModalProps & {
  buttonProps: ButtonProps;
  formName: string;
  modalId: string;
};

export type UploadAvatarModalProps = ModalProps & {
  callback: (data: FormData) => Promise<void>;
};
