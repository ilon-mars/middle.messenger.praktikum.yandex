import { expect } from 'chai';
import sinon from 'sinon';
import { HTTPService } from './http.service.ts';

describe('HTTP Service', () => {
  const XHR = sinon.useFakeXMLHttpRequest();
  const testUrl = '/test';
  const requests: sinon.SinonFakeXMLHttpRequest[] = [];
  let transport: HTTPService;

  XHR.onCreate = (xhr) => {
    console.log('onCreate')
    requests.push(xhr);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  global.XMLHttpRequest = XHR;

  beforeEach(() => {
    transport = new HTTPService(testUrl);
  })

  afterEach(() => {
    requests.length = 0;
  });

  it('use "get" method correctly', () => {
    transport.get(testUrl);

    expect(requests[0].method).to.equal('GET');
  });


  it('use "post" method correctly', () => {
    transport.post('/url', { data: { test: 'test' } });

    expect(requests[0].method).to.equal('POST');
  });

  it('use "delete" method correctly', () => {
    transport.delete('/url', { data: { test: 'test' } });

    expect(requests[0].method).to.equal('DELETE');
  });

  it('use "put" method correctly', () => {
    transport.put('/url', { data: { test: 'test' } });

    expect(requests[0].method).to.equal('PUT');
  });
});
