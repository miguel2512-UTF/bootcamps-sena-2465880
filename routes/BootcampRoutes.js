const express = require('express')
const { getAllBootcamps, getSingleBootcamp, crearBootcamp, actualizarBootcamp, borrarBootcamp } = require('../controllers/BootcampController')

const router = express.Router()

//rutas de usuario
router.route('/')
    .get(getAllBootcamps)
    .post(crearBootcamp)

router.route('/:id')
    .get(getSingleBootcamp)
    .put(actualizarBootcamp)
    .delete(borrarBootcamp)
    
module.exports = router