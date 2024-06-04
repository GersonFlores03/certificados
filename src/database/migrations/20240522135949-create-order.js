'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
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

      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },

      ciudad: {
        type: Sequelize.STRING,
        allowNull: false
      },

      direccion: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING(254)
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
      },

      producto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Productos',
          key: 'id'
        },
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
    await queryInterface.dropTable('Orders');
  }
};