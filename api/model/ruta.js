const moongose=require('moongose');
const Schema=moongose.Schema;
const rutaSchema=new rutaSchema({
    nombre:String,
    usuario_id:{
        type:Schema.Types.ObjectId,
         ref: 'Usuario'
    },
    fecha_creacion:{
        type:Date,
        default:Date.now
    },
    fecha_inicial:Date,
    hora_inicial:String,
    hora_final:String,
    lat:Number,
    lont:Number,
    pasos:[{
            lat:Number,
            lont:Number,
            foto_id:{
                type:Schema.Types.ObjectId,
                ref:'Foto'
            }
        }]
})

module.exports =moongose.model('Ruta',rutaSchema);
