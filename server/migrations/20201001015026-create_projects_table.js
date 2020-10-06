'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING(50),
      totalTasks: Sequelize.INTEGER(),
      ownerId: Sequelize.INTEGER(),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('projects');
  }
};
