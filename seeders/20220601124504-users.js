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
    await queryInterface.bulkInsert('Users', [{
      full_name: 'Joahn Smith',
      age: 25,
      mail: 'xxxxxxx.gmail.com',
      favouriteProducts: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      full_name: 'Laura Jons',
      age: 33,
      mail: 'yyyyyyy.gmail.com',
      favouriteProducts: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      full_name: 'Bernard Simpson',
      age: 33,
      mail: 'zzzzzzzzzz.gmail.com',
      favouriteProducts: 1,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
