require('./config/environment');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const socketIO = require("socket.io");
const http = require("http");
const OneSignal = require('onesignal-node');      

const app = express();

let server = http.createServer(app);

app.use(fileUpload());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// config push notification

var myClient = new OneSignal.Client({      
    userAuthKey: 'YTQzMWRiYjMtZDkyMS00Yzc1LWEzZjMtODIwNjFhMjQ2Y2Vk',      
    // note that "app" must have "appAuthKey" and "appId" keys      
    app: { appAuthKey: 'YTc5ZDI0ZjMtNDEyMi00Y2YyLThmN2EtYTBiNzMyYmExZTY3', appId: '4b547dcd-a6bd-4493-baff-e03ad1d17489' }      
 });  
global.myClient=myClient

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Bienvenido API Garantias Comunitarias');
});

app.use(require("./route/index"));

mongoose.connect(process.env.MONGOURL,{ useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Se conecto a la base de datos");
});

var io = socketIO(server);
global.io = io;

require('./socket/server.js');



server.listen(process.env.PORT, function () {
    console.log('Servidor iniciado');
});