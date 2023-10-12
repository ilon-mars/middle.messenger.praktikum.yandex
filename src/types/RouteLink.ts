import { LinkEnum } from '@/enums';

export type RedirectTo = `/${LinkEnum}`;

export type RouteLink = {
  text: string;
  to: RedirectTo;
};
