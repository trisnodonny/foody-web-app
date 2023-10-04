'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.User, { foreignKey:'UserId' })
      Favorite.belongsTo(models.Post, { foreignKey:'PostId' })
    }
  }
  Favorite.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID is required'
        },
        notEmpty: {
          msg: 'User ID is required'
        }
      }
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Post ID is required'
        },
        notEmpty: {
          msg: 'Post ID is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};