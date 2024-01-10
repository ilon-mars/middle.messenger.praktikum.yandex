import { ManageChatModal } from '@/components/Modal/Modal.ts';

import ChatController from '@/controllers/ChatController.ts';

import { ManageChatModalProps } from '@/types/index.ts';

export class AddChatModal extends ManageChatModal {
  constructor(props: ManageChatModalProps) {
    super({
      ...props,
    });
  }

  action(value: string) {
    return ChatController.createChat(value);
  }
}
