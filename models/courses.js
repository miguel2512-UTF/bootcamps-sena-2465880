'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'El título solo puede tener letras'
        },
        notEmpty:{
          args: true,
          msg: 'El título no debe estar vacío'
        },
        notNull: {
          args: true,
          msg: 'Falta el título'
        },
      }
    },
      
    description:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      
      validate: {
        notEmpty:{
          args: true,
          msg: 'El título no puede estar vacía'
        },
        notNull: {
          args: true,
          msg: 'Falta la descripción'
        },
      }
    
    } ,
    
    minimum_skill:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty:{
          args: true,
          msg: 'la habiliad mínima no puede estar vacía'
        },
        notNull: {
          args: true,
          msg: 'Falta el minimium_skill'
        },
      }
    }, 
    bootcamp_id: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric:{
          args: true,
          msg: 'El bootcamp_id solo puede tener números'
        },
        notEmpty:{
          args: true,
          msg: 'El bootcamp_id no puede estar vacío'
        },
        notEmpty:{
          args: true,
          msg: 'Falta el bootcamp_id'
        },
      }
    }, 
    weeks:{
      type:DataTypes.INTEGER,
      validate: {
        isNumeric:{
          args: true,
          msg: 'Solo puede tener números'
        },
      }
    },
    enroll_cost:{
      type:DataTypes.REAL,
      validate: {
        isNumeric:{
          args: true,
          msg: 'Solo puede tener números'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};