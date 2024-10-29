module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('phases', [
      { name: 'Análisis', color: 'lightblue', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Diseño', color: 'green', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Desarrollo', color: 'orange', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pruebas', color: 'red', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Implementación', color: 'darkblue', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mantenimiento', color: 'grey', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('phases', null, {});
  }
};
