// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const SeedRoles = require('../../seed/roles');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const role = sequelizeClient.define('role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  role.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    role.hasMany(models.users);
    role.hasMany(models.contract);
    role.belongsToMany(models.permissions, { as: 'permissions', through: 'rolePermissions', onDelete: 'CASCADE' });
  };

  role.sync().then(() => {
    SeedRoles.map(r => {
      role.findOrCreate({ where: { name: r.name, slug: r.slug }, defaults: {} })
        .then(([ro, created]) => {
          if (created) {
            console.log('Role create: ', ro);
          }
        });
    });
  });

  return role;
};
