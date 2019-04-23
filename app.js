var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var appRouter = require('./routes/app');
var usuarioRouter = require('./routes/usuario');;
// getting-started.js

mongoose.connect('mongodb://localhost:27017/dbhospital', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    // we're connected!
    console.log('Dbconected',
        'online');
});

//rutas

app.use('/usuario', usuarioRouter);
app.use('/', appRouter);

app.listen(3000, () => {
    console.log('Express Server Puerto 3000',
        'online');
})