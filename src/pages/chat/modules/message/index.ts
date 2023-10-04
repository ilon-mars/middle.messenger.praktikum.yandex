import Handlebars from 'handlebars';

import { tmpl } from './index.tmpl';

import { ReceiverMessage, SenderMessage } from '@/types/ChatMessage';

import $style from './index.module.sass';

type messageProps = (SenderMessage | ReceiverMessage) & {
  isSender: boolean;
};

export const message = (props: messageProps) => {
  return Handlebars.compile(tmpl)({ ...props, $style });
};
