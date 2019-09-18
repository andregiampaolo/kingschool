// Initializes the `subject` service on path `/subject`
const { Subject } = require('./subject.class');
const createModel = require('../../models/subject.model');
const hooks = require('./subject.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/subject', new Subject(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('subject');

  service.hooks(hooks);
};
