'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize)  {
    
    await queryInterface.removeColumn('users', 'firstname');
    await queryInterface.removeColumn('users', 'lastname');
  },
     
  

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'firstname', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('users', 'lastname', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
  }

