// Initializes the `contents` service on path `/contents`
const { Contents } = require('./contents.class');
const createModel = require('../../models/contents.model');
const hooks = require('./contents.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contents', new Contents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contents');

  service.hooks(hooks);
};
