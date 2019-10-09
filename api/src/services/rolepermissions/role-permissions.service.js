// Initializes the `users` service on path `/users`
const { RolePermissions } = require('./role-permissions.class');
const createModel = require('../../models/role-permissions.model');
const hooks = require('./role-permissions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/role-permissions', new RolePermissions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('role-permissions');

  service.hooks(hooks);
};
