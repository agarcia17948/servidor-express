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
/*middlewares: son funciones que se desarrollan en secuencia */
/*aqui estamos registrando todas las peticiones http */
app.use(function(req,res,next){
    console.log('request: '+res.url);
    next();
});

app.use((req,res,next)=>{
    console.log('has pasado por esta funcion');
    next();
});


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
los middleware se ejecutan en orden

*/