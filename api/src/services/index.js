const users = require('./users/users.service.js');
const contract = require('./contract/contract.service.js');
const usersContract = require('./userscontract/users-contract.service.js');
const subject = require('./subject/subject.service.js');
const role = require('./role/role.service.js');
const permissions = require('./permissions/permissions.service.js');
const contents = require('./contents/contents.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(contract);
  app.configure(usersContract);
  app.configure(subject);
  app.configure(role);
  app.configure(permissions);
  app.configure(contents);
};
