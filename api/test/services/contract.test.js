const app = require('../../src/app');

describe('\'contract\' service', () => {
  it('registered the service', () => {
    const service = app.service('contract');
    expect(service).toBeTruthy();
  });
});
