const Usuario=require('./../model/usuarios');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const OneSignal = require('onesignal-node');    

let create=(req,res)=>{
    let data=req.body;
    
    data.clave=bcrypt.hashSync(data.clave, 10)

    let usuario = new Usuario(data);
    usuario.save((err,usuario)=>{
 
    if(err){
        return res.status(400).json({
            ok:false,
            err
        })
    }
    let token = jwt.sign({
        data:usuario,
    },process.env.SECRET,
    { expiresIn: '5h' })
    console.log(usuario);

    var registerNotification = new OneSignal.Notification({      
        contents: {      
            en: `registro con exito en la app gc ${usuario.nombre_completo} `,
        },    
        included_segments: ["Active Users", "Inactive Users"],
        data:{
            id : usuario.id
         }
    });      
    
   

    myClient.sendNotification(registerNotification, function (err, httpResponse,data) {      
        if (err) {      
            console.log('Something went wrong...');      
        } else {      
            console.log(data, httpResponse.statusCode);      
        }      
     });    
     return res.status(200).json({
        ok:true,
        message:'usuario creado',
        token,
        usuario,
    })
})
}

module.exports={
    create
}