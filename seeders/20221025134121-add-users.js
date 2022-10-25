'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
        name: 'Miguel',
        email: "aaaa@gmail.com",
        password: "1234"
      },
      {
        name: "Carlos",
        email: "car@hotmail.com",
        password: "carlos1234"
      },
      {
        name: "Samuel",
        email: "sami@gmail.com",
        password: "9876"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
  }
};
