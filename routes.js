
const express =require('express');
const router =express.Router();
/* rutas */
router.get('/',(req, res)=>{
    // res.end('inicio de app web');    
    res.render('index.ejs');
});

router.get('/login',(req, res)=>{
    res.render('login');
    //res.end('login  esta aqui');    
});

router.get('/producto',(req, res)=>{
    res.end('lista de productos');    
});



module.exports = router;