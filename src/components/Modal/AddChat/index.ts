import { ManageChatModal } from '@/components/Modal';

import ChatController from '@/controllers/ChatController';

import { ManageChatModalProps } from '@/types';

export class AddChatModal extends ManageChatModal {
  constructor(props: ManageChatModalProps) {
    super({
      ...props,
    });
  }

  action(value: string): Promise<void> {
    return ChatController.createChat(value);
  }
}
