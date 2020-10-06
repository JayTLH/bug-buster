const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Users = db.define('tasks', {
  id: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  task: { type: Sequelize.STRING() },
  priority: { type: Sequelize.STRING() },
  status: { type: Sequelize.STRING() },
});

module.exports = Users;