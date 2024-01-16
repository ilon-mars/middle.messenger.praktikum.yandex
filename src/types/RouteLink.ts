import { Routes } from '@/enums/RoutesEnum.ts';

export type RedirectTo = `${Routes}`;

export type RouteLink = {
  text: string;
  to: RedirectTo;
};
