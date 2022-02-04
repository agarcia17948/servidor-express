
/*settings */

/*las configuraciones existen para 
para establecer las configuraciones 
de un motor de plantillas
motor de plantillas potencializan el html
 */

/*
templates
dynamic html views
*/

/*
sin express
const http = require('http');

http.createServer ((req, res)=>{
    res.end ('hola mundo real');
}).listen(3000);
*/

/*un objeto json esta en formato clave valor */

const express = require('express');
const app=express();
/* ---------------------------------- */
const morgan =require('morgan');
app.use(morgan('dev'));
const routes = require('./routes');
const routesApi =require('./routes-api');

app.set('appName', 'mi primer server');
app.set('views',__dirname + '/views');
//console.log(__dirname );
app.set ('view engine','ejs');
app.use(morgan('combined'));
app.use(routes);
app.use('/api',routesApi);

/* ---------------------------------- */
///home/agarcia/servidor-express/views/index.ejs

app.get('*',(req, res)=>{
    res.end('error 404 no existe la pagina');    
});

app.listen(3000, ()=>{
    console.log('servidor funcionando');
    console.log('nombre de la app: ', app.get('appName'));
});

/*
modulo cors para conectarse  servidores
esto va en navigation.ejs
*/