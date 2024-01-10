import { Block } from './Block/index.ts';

export const createApp = (rootSelector: string, rootComponent: Block) => {
  const app = document.querySelector(rootSelector);

  if (!app) {
    throw new Error(`Корневой элемент с селектором ${rootSelector} не найден 🕵🏼`);
  }

  app.innerHTML = '';

  app.append(rootComponent.element!);
  rootComponent.dispatchComponentDidMount();

  return app;
};
