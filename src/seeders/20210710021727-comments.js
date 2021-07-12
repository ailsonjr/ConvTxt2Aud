'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [{
      comment: 'Teste de comentário pelo seeder',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      comment: 'Comentário adicional pelo seeder',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
