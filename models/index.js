const sequelize = require('../config/db');
const Rule = require('./rules');
const Variable = require('./variable');

module.exports = {
  sequelize,
  Rule,
  Variable
};
