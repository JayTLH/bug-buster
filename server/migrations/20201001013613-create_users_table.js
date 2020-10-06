'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: Sequelize.STRING(50) },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};
