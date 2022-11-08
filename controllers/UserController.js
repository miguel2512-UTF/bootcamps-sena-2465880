//objeto de conexión
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes,ValidationError } = require('sequelize')
//el modelo:
const UserModel = require('../models/user')
const user = require('../models/user')
//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)


//establecer las rutas
exports.getAllUsers = async(req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                "success": true,
                "data": users
            }
        )
    } catch (error) {
        res
            .status(500)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }
    
}

//obtener recurso por id
exports.getSingleUser =  async(req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id);
        //si usuario no existe 
        if (!userId) {
            res.status(400).json(
                {
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]
                }
            )
        }else{
            res.status(200).json(
            {
                "success": true,
                "data": userId
            }
        )
        }
        
    } catch (error) {
        res
            .status(500)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }
    
}

//POST: crear nuevo recurso
exports.crearUser = async(req, res)=>{
    try { 
        const newUser = await User.create(req.body);
        console.log(req.body);
        res.status(201).json(
            {
                "success": true,
                "data": newUser
            }
        )
    } catch (error) {
        if (error instanceof ValidationError) {
            const errores = error.errors.map((e)=>e.message)
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": errores
                })
            console.log(error.errors[0].message);
        }else{
            //errores de servidor
            res
                .status(500)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
   

    
}

//PUT - PATCH
exports.actualizarUser = async(req, res)=>{
    try {
        //consultar datos actualización
        const upUser = await User.findByPk(req.params.id)
        if (!upUser) {
            //usuario no encontrado
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]
                })
        }else{
            //actualizar usuario por id
            await User.update(req.body, {
                where: {
                    id: req.params.id
                } 
            })
            //seleccionar usuario actualizado
            const userAct = await User.findByPk(req.params.id)

            res.status(200).json({
                "success": true,
                "data": userAct
            })
        }
    } catch (error) {
        res
            .status(500)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }
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