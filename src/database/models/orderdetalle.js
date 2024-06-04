'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetalle.belongsTo(models.Order , {foreignKey: "orden_Id"})
     // OrderDetalle.belongsTo(models.Producto , {foreignKey: "producto_Id"})
    }
  }
  OrderDetalle.init({
    
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },


    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    precioUnitario: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },

    subTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },


  }, {
    sequelize,
    modelName: 'OrderDetalle',
  });
  return OrderDetalle;
};