// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const SeedUsers = require('../../seed/users');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
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
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    users.belongsTo(models.role);
  };

  users.sync().then(() => {
    SeedUsers.map(user => {
      users.findOrCreate({ where: { email: user.email }, defaults: { password: user.password } })
        .then(([user, created]) => {
          if (created) {
            console.log('User create: ', user);
          }
        });
    });
  });

  return users;
};
