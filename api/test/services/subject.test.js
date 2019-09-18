const app = require('../../src/app');

describe('\'subject\' service', () => {
  it('registered the service', () => {
    const service = app.service('subject');
    expect(service).toBeTruthy();
  });
});
