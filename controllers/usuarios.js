var express     = require('express');
var router      = express.Router();


/**
 * Todos los usuarios
 */
router.get('/', function(req, res) {
    console.log(req);
    res.send('Has pedido todos usuarios')
});

/**
 * buscar usuario por id
 */
router.get('/:id', function(req, res) {
    console.log(req);
    res.send('Has pedido usuario por id')
});

/**
 * crear usuario
 */
router.post('/', function(req, res) {
    console.log(req);
    res.send({'respuesta':'Has pedido crear usuario'})
});




module.exports = router;