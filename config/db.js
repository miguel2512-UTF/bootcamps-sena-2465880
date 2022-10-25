const sequelize = require('./seq')
//dependencia a la función para crear el modelo
const UserModel = require('../models/user')
const {DataTypes} = require('sequelize')
const colors = require('colors')

//crear el modelo
const User = UserModel(sequelize, DataTypes)

//crear función asyncrona para conexión
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conexión establecida exitosamente'.bgMagenta.white);
        //seleccionar los users
        // const usuarios = await User.findAll()
        // console.log(usuarios);
        //crear usuario
        // const Miguel = await User.create({ name: "Miguel", email: "miguel@gmail.com", password: "123" });
        // console.log("ID:", Miguel.id);
        // console.log("Nombre:", Miguel.name);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB