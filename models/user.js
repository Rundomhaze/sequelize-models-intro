'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // У одного юзера только один любимый продукт
      // один юзер может делать много заказов
      User.Product = User.belongsTo(Product, { foreignKey: 'favouriteProducts' })
      User.Orders = User.hasMany(Order, {foreignKey: 'id'})
    }
  }
  User.init({
    full_name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    mail: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    favouriteProducts: {
      allowNull: false,
      type: DataTypes.TEXT,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
