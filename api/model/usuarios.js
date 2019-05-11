const moongose=require('mongoose');
const Schema=moongose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const usuarioSchema=new Schema({
    nombre:{
        type:String,
        minlength:[4,'El minimo de caracteres para el nombre es 4'],
        maxlength:[100,'El maximo de caracteres para el nombre es 100'],
        required:[true,'El campo nombre es requerido']    
    },
    apellido:{
        type:String,
        minlength:[4,'El minimo de caracteres para el apellido es 4'],
        maxlength:[100,'El maximo de caracteres para el apellido es 100'],
        required:[true,'El campo apellido es requerido']    
    },
    correo:{
        type:String,
        minlength:[4,'El minimo de caracteres para el correo es 4'],
        maxlength:[100,'El maximo de caracteres para el correo es 100'],
        required:[true,'El campo correo es requerido'],
        validate: {
            validator: function(v) {
                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(v);
            },
            message: props => `${props.value} el correo no es valido`
        }    
    },
    telefono:{
        type:String,
        required:false,
        maxlength:[11,'El maximo de caracteres para el telefono es 11'],    
    },
    usuario:{
        type:String,
        unique:true,
        required:[true,'El campo usuario es requerido']
    },
    clave:{
        type:String
    },
    google_id:{
        type:String
    },
    push_id:{
        type:String
    },
    socket_id:{
        type:String
    },
    ingresos:[{
            fecha:{
                type:Date,
                default:Date.now
            }
        }]
});

usuarioSchema.plugin(uniqueValidator,{ message: 'Error, el {PATH} es unico.' });
var virtual_nombre=usuarioSchema.virtual('nombre_completo');
virtual_nombre.get(function(){
    return this.nombre +' '+this.apellido; 
})

module.exports=moongose.model('Usuario',usuarioSchema)