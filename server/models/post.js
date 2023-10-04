'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey:'UserId' })
      Post.hasMany(models.Favorite, { foreignKey:'PostId' })
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title is required"
        },
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image URL is required"
        },
        notEmpty: {
          msg: "Image URL is required"
        },
        isUrl: {
          msg: "Input must be an image URL"
        }
      }
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Instructions is required"
        },
        notEmpty: {
          msg: "Instructions is required"
        }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Ingredients is required"
        },
        notEmpty: {
          msg: "Ingredients is required"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User ID is required"
        },
        notEmpty: {
          msg: "User ID is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};