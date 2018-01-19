const mongoose=require('mongoose');
//const User = require('../models/userModel');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const addUser = function(req,res){
    req.body.Password = bcrypt.hashSync(req.body.Password,8);
    // const decrypt = bcrypt.compareSync("Pass1",req.body.password);
    // console.log(decrypt);
    const newUser=new User(req.body);
    newUser.save(function(err){
        if(err){res.json({'ERROR':err})}
        else{res.json({'SUCCESS':newUser})}
    })
}
module.exports.addUser = addUser;