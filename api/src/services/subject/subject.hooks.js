const { authenticate } = require('@feathersjs/authentication').hooks;
const checkPermissions = require('feathers-permissions');


module.exports = {
  before: {
    all: [authenticate('jwt'), checkPermissions({
      async roles(context) {

        const { user } = context.params;
        const roles = await context.app.service('role').find({
          query: {
            id: user.roleId
          }
        });

        context.params.user['permissions'] = 'subject:find,subject:create';//roles.data.map(role => role.slug);

        console.log('Caminho: ', context.params.user['permissions']);
        console.log('Path: ', context.path + ':' + context.method);

        return [context.path + ':' + context.method];


        // const role = await context.app.service('role').get(context.params.user.roleId);
        // console.log(role);
        // // async (context) => {

        // //   return checkPermissions({ roles: [role.slug] });
        // // }
        // return ['admin'];
      }
    })],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
