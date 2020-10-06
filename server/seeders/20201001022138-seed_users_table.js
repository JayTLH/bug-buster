'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('users', [{
      name: 'Demo User',
      email: 'demo@bb.com',
      password: 'demobb',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', { email: 'demo@bb.com' });
  }
};
