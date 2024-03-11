"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ User, Cart }) {
      this.hasMany(Cart, { foreignKey: "product_id" });
      this.belongsTo(User, { foreignKey: "seller_id" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      forSale: DataTypes.BOOLEAN,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
