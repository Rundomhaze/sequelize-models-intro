'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{
      name_product: 'Банан',
      price: 100.00,
      manufacturer: 'GSB',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_product: 'Апельсин',
      price: 300.00,
      manufacturer: 'Gang',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_product: 'Яблоко',
      price: 500.00,
      manufacturer: 'Bang',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
