
const express = require('express');
const sequelize = require('./database/sequelize.config.js')
const app = express();

//seteamos url.. para capturar datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// invocamos dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//motor de plantillas
app.set('view engine', 'ejs');

//bcryptjs
const bcryptjs = require('bcryptjs');

// var de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

// invocamos var de conexion a DB
//const connection = require('./database/db');

app.get('/', (req, res)=>{
    res.render('index')
});

app.listen(3000, (req, res)=>{
    console.log('SERVER RUNNING')
})