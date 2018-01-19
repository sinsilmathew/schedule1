const mongoose = require('mongoose');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const authentication = function(req,res){
   
    const InUserName = req.body.UserName;
    const InPassword = req.body.Password;
    console.log(InUserName);
    User.findOne({UserName:InUserName},
        function(err,user){
            if(err){ //throw err
            res.json({success:false,message:"Document Not Found"})
            }
            if(!user){
                res.json({success:false,message:"USer Not found"})
            }
            else if(user)
            {
                if(user.Password!==InPassword)
                {
                    res.json({success:false,message:"Authentication failed,Wrong Password"})
                }
                else{
                        const payload = {
                            admin:user.admin
                        };
                        const token = jwt.sign(payload,app.get('superSecret'),{
                            expiresIn:1400
                        });
                        res.json({
                            success:true,
                            message:"Authentication successfull",
                            token:token
                        });
                }
            }
        });
}

module.exports.authentication = authentication;