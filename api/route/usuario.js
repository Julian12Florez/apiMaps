const express=require('express');

const usuarioController=require('./../controller/usuario')

var router=express.Router();

router.post('/register',usuarioController.create)
router.get('/test',(req,res)=>{
    return res.json({
        mensaje:"api prueba en serveo"
    })
})

module.exports=router;