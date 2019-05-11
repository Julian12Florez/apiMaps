const moongose=require('mongoose');
const Schema=moongose.Schema;

const fotoSchema=new fotoSchema({
    url:{
        type:String,
        required:[true,'la foto ers obligatoria']
    },
    descripcion:String
})

module.exports=moongose.model('Foto',fotoSchema);