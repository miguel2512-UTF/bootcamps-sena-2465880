const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencia a la conexión a bd
const connectDB = require('./config/db')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')

//establecer el archivo de configuración
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 crear el objeto app
const app = express()

//ejecutar la conexión a db
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)

//3. ejecutar servidor
//de desarrollo express
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto: ${ process.env.PORT }`.bgGreen.black);
})