const express = require('express');
const app = express();
const port = 3000;

/* CONFIGURACIONES */
app.set('view engine','ejs'); //seteo el motor de vistas
app.set('views',__dirname + '/views');

app.use(express.static(__dirname +'/public'));

/* RUTAS */

const indexRouter = require('./routes/indexRouter');
const autosRouter = require('./routes/autosRouter');


app.use('/',indexRouter);
app.use('/autos',autosRouter);

app.listen(port,()=>console.log('Servidor corriendo en el puerto ' + port))