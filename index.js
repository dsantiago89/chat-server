
var express         = require('express');
const MongoClient   = require('mongodb').MongoClient;
var app             = express();

var server, db;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.use(require('./controllers'))

MongoClient.connect('mongodb://dsantiago:a898989A@ds145365.mlab.com:45365/db_server', function(err, database){
    if (err) return console.log(err);
    db = database;
    server = app.listen(8081, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port);
    });

});

module.exports = server;
module.exports = db;