const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Users = db.define('projects', {
  id: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING() },
  active_tasks: { type: Sequelize.INTEGER() },
  total_tasks: { type: Sequelize.INTEGER() }
});

module.exports = Users;