import { expect } from 'chai';
import sinon from 'sinon';

import { Block } from '../Block';
import { Router as RouterClass } from './Router';

describe('Router', () => {
  let router: RouterClass;

  const mockBlock = new Block({})

  beforeEach(() => {
    router = new RouterClass('#app');
  });

  it('should be Router instance (singleton)', () => {
    expect(router).to.be.an.instanceOf(RouterClass);
  });

  it('should add routes using the "use" method', () => {
    router.use('test', mockBlock);

    expect(router.routes.length).to.eq(1);
  });

  it('should go to created route', () => {
    const testRoute = '/test';

    router
      .use(testRoute, mockBlock)
      .start();

    router.go(testRoute);

    expect(global.window.location.pathname).to.eq(testRoute);
  });

  it('calls the "back" method when going back', () => {
    const spy = sinon.spy(window.history, 'back');

    router.back();
    expect(spy.calledOnce).to.be.true;
  });

  it('calls the "forward" method when going forward', () => {
    const forwardSpy = sinon.spy(window.history, 'forward');

    router.forward();
    expect(forwardSpy.calledOnce).to.be.true;
  });
});
