const express = require('express'); //Importamos la dependencia
var app = express(); //Declaramos una App de Express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); //Esta linea espicifica como se llama el directorio virtual, y a donde sera mapeado

app.set('view engine', 'ejs');

//primera ruta (está al nivel de la raíz /)
app.get('/', function (req, res){ 
    res.send(`<DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1> Hola Mundo </h1></html>`);
});

//segunda ruta 
app.get('/person/:id', function (req, res) {
    res.render('person', {ID: req.params.id, message: req.query.message, times: req.query.times});
});

app.listen(port); //Levantar el server y ponerlo a la escucha