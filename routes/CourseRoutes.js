const express = require('express')
const {getAllcourses, getSinglecourses, postcourses, putcourses, deletecourses} = require('../controllers/CoursesController')
const router = express.Router()

//Ruta de usuario

router.route('/')
    .get(getAllcourses)
    .post(postcourses)

router.route('/:id')
    .get(getSinglecourses)
    .put(putcourses)
    .delete(deletecourses)

module.exports = router