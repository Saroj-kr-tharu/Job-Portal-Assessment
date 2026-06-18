'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      job_title: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      job_type: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      applied_date: {
        type: Sequelize.DATE,
        
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applications');
  }
};