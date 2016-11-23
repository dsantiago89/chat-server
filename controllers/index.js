var express     = require('express')
var router      = express.Router();

router.use('/usuarios', require('./usuarios'));

module.exports = router;