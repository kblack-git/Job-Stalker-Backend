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
      message.belongsTo(models.user, {
        foreignKey: 'user_id',
      });
    }
  }
  message.init({
    name: DataTypes.STRING,
    method: DataTypes.STRING,
    date: DataTypes.INTEGER,
    note: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};