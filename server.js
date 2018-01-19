const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./api/models/taskModel');
const User = require('./api/models/userModel');
const http = require('http');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const config = require('./config/config')

app = express();
port = process.env.PORT||4500;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Schedule1');//,{useMongoClient:true}
mongoose.connection.once('open',()=>console.log('Db connection established'))
.on('error',(error)=>{
    console.warn('Warning',error);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('superSecret',config.secret);
//config(app);

const routes = require('./Routes/Router');
routes(app);
app.use("*",function(req,res){
    res.status(404).send('404');
    });
const server = http.createServer(app);
app.listen(port);
module.exports = app;