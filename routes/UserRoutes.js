const express = require('express')
const { getAllUsers, getSingleUser, crearUser, actualizarUser, borrarUser } = require('../controllers/UserController')

const router = express.Router()

//rutas de usuario
router.route('/')
    .get(getAllUsers)
    .post(crearUser)

router.route('/:id')
    .get(getSingleUser)
    .put(actualizarUser)
    
module.exports = router