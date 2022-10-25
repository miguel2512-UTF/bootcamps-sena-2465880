const Sequelize = require('sequelize')

//definir objeto sequelize de conexión
 const sequelize = new Sequelize(
    'devcamp-2465880',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3307'
    }
 )

 module.exports = sequelize
 