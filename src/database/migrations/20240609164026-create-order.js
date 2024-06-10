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

      dni: {
        type: Sequelize.STRING(8),
        allowNull: false
      },

      ruc: {
        type: Sequelize.STRING(11),
        allowNull: false
      },

      email: {
        type: Sequelize.STRING(254),
        allowNull: false
      },

      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },

      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },

      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },

      telefono: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      imagen: {
        type: Sequelize.STRING,
        allowNull: false
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