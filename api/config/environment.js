process.env.PORT = process.env.PORT || 3000;

process.env.SECRET = process.env.SECRET || "esta-es-mi-clave-secreta";

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
if(process.env.NODE_ENV=="prodcution"){
    process.env.MONGOURL = 'mongodb+srv://appGarantias:test123@cluster0-y7v0e.mongodb.net/test?retryWrites=true';
}else{
    process.env.MONGOURL = 'mongodb://localhost:27017/garantias';
}
