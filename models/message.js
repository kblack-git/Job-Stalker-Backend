'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Message.belongsTo(models.User, {
      //   foreignKey: 'user_id',
      // });
    }
  }
  message.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.INTEGER,
    note: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};