import { RedirectTo } from '@/types';

export const navigateTo = (path: RedirectTo) => {
  window.history.pushState({}, path, window.location.origin + path);
};
