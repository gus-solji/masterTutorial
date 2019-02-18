'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar archivos de rutas

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Rutas
app.get('/',(req,res) => {
    res.status(200).send(
      "<h1>Pagina de inicio</h1>"
    );
});

app.post('/test',(req,res) => {
    console.log(req.body.nombre);
    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    });
});

//Exportar
module.exports = app;