const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importing routes
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('body-parser');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'landowolf10',
    port: 3306,
    database: 'crud_nodejs_mysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', customerRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});