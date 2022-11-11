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
      // define association here
    }
  }
  User.init({ 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: "Nombre solo puede tener letras"
        },
        notEmpty: {
          args: true,
          msg: "Nombre no puede estar vacío"
        },
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "email no puede estar vacío"
        },
        notNull: true,
        isEmail: {
          args: true,
          msg: "email debe ser válido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5,10],
          msg: "contraseña debe tener un tamaño entre 5 y 10"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};