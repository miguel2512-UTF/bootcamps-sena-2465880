const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')

//establecer el archivo de configuración
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 crear el objeto app
const app = express()

app.use('/api/v1/bootcamps', bootcampRoutes)

//3. ejecutar servidor
//de desarrollo express
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto: ${ process.env.PORT }`.bgGreen.black);
})