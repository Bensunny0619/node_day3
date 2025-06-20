const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rule = sequelize.define('Rule', {
  name: DataTypes.STRING,
  condition: DataTypes.STRING,
  action: DataTypes.STRING,
}, {
  tableName: 'rules',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Rule;
