const mongoose=require('mongoose');
//const User = require('../models/userModel');
const User = mongoose.model('User');
const bodyParser = require('body-parser');

const addUser = function(req,res){
    const newUser=new User(req.body);
    newUser.save(function(err){
        if(err){res.json({'ERROR':err})}
        else{res.json({'SUCCESS':newUser})}
    })
}
module.exports.addUser = addUser;