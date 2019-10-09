// Initializes the `permissions` service on path `/permissions`
const { Permissions } = require('./permissions.class');
const createModel = require('../../models/permissions.model');
const hooks = require('./permissions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/permissions', new Permissions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('permissions');

  service.hooks(hooks);
};
