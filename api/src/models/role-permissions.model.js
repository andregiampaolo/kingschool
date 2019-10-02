// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rolePermissions = sequelizeClient.define('rolePermissions', {}, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  return rolePermissions;
};