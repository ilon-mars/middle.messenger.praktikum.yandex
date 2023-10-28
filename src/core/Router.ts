import { Block } from './Block';
import Route from './Route';

class Router {
  private static __instance: Router;

  #routes: Route[] = [];
  #currentRoute: Route | null = null;
  #history: History = window.history;

  readonly #rootQuery!: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.#rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.#rootQuery);

    this.#routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      if (target) {
        this.#onRoute(target.location.pathname);
      }
    };

    this.#onRoute(window.location.pathname);
  }

  #onRoute(pathname: string) {
    const route = this.#getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.#currentRoute && this.#currentRoute !== route) {
      this.#currentRoute.leave();
    }

    route.render();
  }

  go(pathname: string) {
    this.#history.pushState({}, '', pathname);
    this.#onRoute(pathname);
  }

  back() {
    this.#history.back();
  }

  forward() {
    this.#history.forward();
  }

  #getRoute(pathname: string) {
    return this.#routes.find(route => route.match(pathname));
  }
}

export default new Router('#app');
