export const navigateTo = (path: string) => {
  window.history.pushState({}, path, window.location.origin + path);
};
