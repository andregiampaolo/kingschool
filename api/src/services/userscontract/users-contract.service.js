// Initializes the `users` service on path `/users`
const { UsersContract } = require('./users-contract.class');
const createModel = require('../../models/users-contract.model');
const hooks = require('./users-contract.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users-contract', new UsersContract(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-contract');

  service.hooks(hooks);
};
