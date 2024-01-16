import { Events } from '../Events.ts';
import { ButtonProps } from './ButtonProps.ts';

export type ModalProps = {
  title: string;
  events?: Events;
};

export type ManageChatModalProps = ModalProps & {
  buttonProps: ButtonProps;
  formName: string;
  modalId: string;
  overlayBind?: () => void;
};

export type UploadAvatarModalProps = ModalProps & {
  callback: (data: FormData) => Promise<void>;
};
