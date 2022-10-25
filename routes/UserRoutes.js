const express = require('express')

const router = express.Router()

//establecer las rutas
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message": "aquí se van a mostrar todos los usuarios"
        }
    )
})

//obtener recurso por id
router.get('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí va a mostrarse el usuario cuyo id es: ${req.params.id}`
        }
    )
})

//POST: crear nuevo recurso
router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "message": "aquí se va a crear el usuario"
        }
    )
})

//PUT - PATCH
router.put('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí se va a actualizar el usuario con id: ${req.params.id}`
        }
    )
})

//DELETE
router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí se va a eliminar el usuario con id: ${req.params.id}`
        }
    )
})

module.exports = router