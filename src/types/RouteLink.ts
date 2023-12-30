import { Routes } from '@/enums';

export type RedirectTo = `${Routes}`;

export type RouteLink = {
  text: string;
  to: RedirectTo;
};
