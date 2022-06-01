'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // один и тот же продукт может быть favorites у нескольких users
      // один продукт может быть в нескольких заказаз
      Product.Users = Product.hasMany(User, {foreignKey: 'favouriteProducts'})
      Product.Orders = Product.hasMany(Order, {foreignKey: 'id_product'})
    }
  }
  Product.init({
    name_product: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    manufacturer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
