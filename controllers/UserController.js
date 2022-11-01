//objeto de conexión
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes} = require('sequelize')
//el modelo:
const UserModel = require('../models/user')
const user = require('../models/user')
//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)


//establecer las rutas
exports.getAllUsers = async(req, res)=>{
    const users = await User.findAll();
    res.status(200).json(
        {
            "success": true,
            "data": users
        }
    )
}

//obtener recurso por id
exports.getSingleUser =  async(req, res)=>{
    const userId = await User.findByPk(req.params.id);
    res.status(200).json(
        {
            "success": true,
            "data": userId
        }
    )
}

//POST: crear nuevo recurso
exports.crearUser = async(req, res)=>{
    const newUser = await User.create(req.body);

    console.log(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": newUser
        }
    )
}

//PUT - PATCH
exports.actualizarUser = async(req, res)=>{
    //actualizar usuario por id
    await User.update(req.body, {
        where: {
            id: req.params.id
        } 
    })

    //consultar datos actualización
    const upUser = await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "success": true,
            "data": upUser
        }
    )
}

//DELETE
exports.borrarUser = async(req, res)=>{
    //buscar al usuario
    const u = await User.findByPk(req.params.id)

    //borrar usuario por id
    await User.destroy({
        where: {
          id: req.params.id
        }
      });

    //response
    res.status(200).json(
        {
            "success": true,
            "data": u
        }
    )
}