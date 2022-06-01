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
    await queryInterface.bulkInsert('Orders', [{
      id_user: 4,
      id_product: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_user: 5,
      id_product: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id_user: 6,
      id_product: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
