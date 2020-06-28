// vamos a requerir express
const express = require('express');
// una vez requerido lo inicializamnos con una constante llamada app.
const app = express();

// settings
// establezco el puerto de mi servidor 
// revise que hay un puerto en el sistema operativo
// si no lo encuentra utilice el puerto 3000
app.set('port', process.env.PORT || 3000);


// ahora vamos a inicializar el servidor
// el siguiente log
app.listen(app.get('port'), () => {
    console.log("Server en el puerto 3000");
})