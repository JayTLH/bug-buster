'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('projects', [{
      name: 'Demo Project 1',
      totalTasks: 0,
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Demo Project 2',
      totalTasks: 0,
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('projects', { ownerId: 1 });
  }
};
