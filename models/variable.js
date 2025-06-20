const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Variable = sequelize.define('Variable', {
  name: DataTypes.STRING,
  type: DataTypes.STRING, // Accept STRING, FLOAT, INTEGER as values
}, {
  tableName: 'variable',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Variable;
