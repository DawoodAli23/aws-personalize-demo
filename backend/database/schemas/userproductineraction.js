"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProductIneraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserProductIneraction.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      eventType: DataTypes.STRING,
      timestamp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserProductIneraction",
    }
  );
  return UserProductIneraction;
};
