'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User , {foreignKey: "user_id"})
      Order.belongsTo(models.Producto , {foreignKey: "producto_id"})
      Order.hasMany(models.OrderDetalle , {foreignKey: "orden_Id"})
    }
  }
  Order.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    
    ruc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },

    ciudad:{
      type: DataTypes.STRING,
      allowNull:false
    },

    direccion: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING(254)
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};