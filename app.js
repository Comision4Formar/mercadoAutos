const express = require('express');
const app = express();
const port = 3000;

const methodOverride = require('method-override');


/* CONFIGURACIONES */
app.set('view engine','ejs'); //seteo el motor de vistas
app.set('views',__dirname + '/views');

app.use(express.static(__dirname +'/public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));

/* RUTAS */

const indexRouter = require('./routes/indexRouter');
const autosRouter = require('./routes/autosRouter');
const adminRouter = require('./routes/adminRouter');


app.use('/',indexRouter);
app.use('/autos',autosRouter);
app.use('/admin',adminRouter);

app.listen(port,()=>console.log('Servidor corriendo en el puerto ' + port))