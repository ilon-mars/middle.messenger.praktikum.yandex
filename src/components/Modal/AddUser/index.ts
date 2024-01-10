import store from '@/core/Store/index.ts';

import { ManageChatModal } from '@/components/Modal/Modal.ts';

import ChatController from '@/controllers/ChatController.ts';

import { ManageChatModalProps } from '@/types/index.ts';

export class AddUserModal extends ManageChatModal {
  constructor(props: ManageChatModalProps) {
    super({
      ...props,
    });
  }

  async action(value: string) {
    if (!store.state.selectedChat || !store.state.selectedChat.id) {
      return;
    }

    await ChatController.addUserToChat(store.state.selectedChat?.id, parseInt(value));
  }
}
