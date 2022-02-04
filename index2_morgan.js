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
/* usaremos morgan en lugar de  middlewares */
/*morgan tiene varias configuraciones
dev por default
dev, tiny, short, commond, combined

*/
const morgan =require('morgan');
app.use(morgan('tiny'));


/* ---------------------------------- */
/* rutas */
app.get('/',(req, res)=>{
    //req: lo que envia el navegador
    // res: respondemos al navegador
    res.end('inicio de app web');    
});

app.get('/login',(req, res)=>{
    res.end('login  esta aqui');    
});

app.get('/producto',(req, res)=>{
    res.end('lista de productos');    
});

app.get('*',(req, res)=>{
    res.end('error 404 no existe la pagina');    
});



app.listen(3000, ()=>{
    console.log('pagina no encontrada 404');
});


/*
modulo cors para conectarse  servidores


*/