'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      Order.belongsTo(models.User , {foreignKey: "user_id"})
      Order.belongsTo(models.Producto , {foreignKey: "producto_id"})
    }
  }
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    dni: {
      type: DataTypes.STRING(8),
      allowNull: false
    },

    ruc: {
      type: DataTypes.STRING(11),
      allowNull: false
    },

    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },

    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },

    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },

    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    sequelize,
    timestamps: true,
    modelName: 'Order',
  });
  return Order;
};