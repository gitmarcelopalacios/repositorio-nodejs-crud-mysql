// cargo el módulo
const express = require('express');
// el modulo path une carpetas
const path = require('path');
// el módulo morgan contiene varias funciones
// que utilizaremos en los middlewares
const morgan = require('morgan')
    // el módulo mysql gestiona la base de datos
const mysql = require('mysql');
// el modulo express-myConnection la conexión
// a la base de datos
const myConnection = require('express-myconnection');
// el módulo express gestiona una librería de funciones
const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// gestiona el puerto del servidor
app.set('port', process.env.PORT || 3000);
// gestiono el motor de la vista
app.set('view engine', 'ejs');
// indico donde estan las carpetas de las vistas
app.set('views', path.join(__dirname, 'views'));

// middlewares (Todos los middlewares son funciones)
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));



// starting the server
app.listen(app.get('port'), () => {
    console.log("Server en el puerto 3000");
})