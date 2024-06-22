'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Correos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ruc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Correos');
  }
};