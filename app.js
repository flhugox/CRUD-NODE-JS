var express = require('express');
var app = express();
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Dbconected',
        'online');
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
});

app.listen(3000, () => {

    console.log('Express Server Puerto 3000',
        'online');
})