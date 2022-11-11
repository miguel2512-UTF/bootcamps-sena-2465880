//objeto de conexión
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes,ValidationError } = require('sequelize')
//el modelo:
const BootcampModel = require('../models/bootcamp')
const UserModel = require('../models/user')
//crear el objeto usuario
const Bootcamp = BootcampModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

//establecer las rutas
exports.getAllBootcamps= async(req, res)=>{
    try {
        const bootcamps = await Bootcamp.findAll();
        res.status(200).json(
            {
                "success": true,
                "data": bootcamps
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
exports.getSingleBootcamp =  async(req, res)=>{
    try {
        const bootcampId = await Bootcamp.findByPk(req.params.id);
        //si usuario no existe 
        if (!bootcampId) {
            res.status(400).json(
                {
                    "success": false,
                    "errors": [
                        "bootcamp no existe"
                    ]
                }
            )
        }else{
            res.status(200).json(
            {
                "success": true,
                "data": bootcampId
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
exports.crearBootcamp = async(req, res)=>{
    try { 
        const upUser = await User.findByPk(req.body.user_id);
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
            const newBootcamp = await Bootcamp.create(req.body);
            console.log(req.body);
            res.status(201).json(
                {
                    "success": true,
                    "data": newBootcamp
                }
            )
        }
        
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
exports.actualizarBootcamp = async(req, res)=>{
    try {
        //consultar datos actualización
        const upBootcamp = await Bootcamp.findByPk(req.params.id)
        if (!upBootcamp) {
            //usuario no encontrado
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": [
                        "bootcamp no existe"
                    ]
                })
        }else{
            //actualizar usuario por id
            await Bootcamp.update(req.body, {
                where: {
                    id: req.params.id
                } 
            })
            //seleccionar usuario actualizado
            const bootcampAct = await Bootcamp.findByPk(req.params.id)

            res.status(200).json({
                "success": true,
                "data": bootcampAct
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
exports.borrarBootcamp = async(req, res)=>{
    try {
        //buscar al usuario
        const b = await Bootcamp.findByPk(req.params.id)

        if (!b) {
            //usuario no encontrado
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": [
                        "bootcamp no existe"
                    ]
                })
        }else{
            //borrar usuario por id
            await Bootcamp.destroy({
                where: {
                id: req.params.id
                }
            });

            //bootcamp eliminado
            res.status(200).json(
                {
                    "success": true,
                    "data": b
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