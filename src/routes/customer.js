// requiero el modulo express
const express = require('express');
// ejecutaremos el metodo router
// devuelve un objeto de js que 
// puedo ir agregandole rutas.
const router = express.Router();

// requiero en controlador
const customerController = require('../controllers/customerController');

// Aquí escribimos todas las URLS que nuestra
// aplicación puede manejar.
router.get('/', customerController.list);


// al final lo exporto
module.exports = router;