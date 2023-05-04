'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('messages', 'email', 'method');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('messages', 'method', 'email');
  }
};
