const { Service } = require('feathers-sequelize');

exports.RolePermissions = class RolePermissions extends Service {
  remove(id, params) {
    params.query.roleId = id;
    console.log(id);
    console.log(params);
    
    return Promise.resolve(
      params.query.roleId = id;
    )

    return super.remove(id, params);

  }
  update(id, data, params) {
    return null;
  }
  get(id, params) {
    return null;
  }
  patch(id, data, params) {
    return null;
  }

};
