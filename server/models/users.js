const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
  id: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING() },
  email: {
    type: Sequelize.STRING(),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
  active_projects: { type: Sequelize.INTEGER() },
  total_projects: { type: Sequelize.INTEGER() },
});

module.exports = Users;