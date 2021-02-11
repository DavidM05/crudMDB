const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();


// importing routes
const indexRaoutes = require('./routes/index');
//connecting db
mongoose.connect('mongodb://localhost/crud')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));
//setting
app.set('port', process.envPORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan ('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRaoutes);
//starting server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.getMaxListeners('port')}`);
});