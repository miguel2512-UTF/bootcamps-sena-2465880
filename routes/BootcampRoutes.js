const express = require('express')

const router = express.Router()

//establecer las rutas
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message": "aquí se van a mostrar todos los bootcamps"
        }
    )
})

//obtener recurso por id
router.get('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí va a mostrarse el bootcamp cuyo id es: ${req.params.id}`
        }
    )
})

//POST: crear nuevo recurso
router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "message": "aquí se va a crear el bootcamp"
        }
    )
})

//PUT - PATCH
router.put('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí se va a actualizar el bootcamp con id: ${req.params.id}`
        }
    )
})

//DELETE
router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `aquí se va a eliminar el bootcamp con id: ${req.params.id}`
        }
    )
})

module.exports = router