const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    UserId:{
        type:Number,
        required:"User ID is required"
    },
    UserName:{
        type:String,
        required:"Username Required"
    },
    Password:{
        type:String,
        required:"Password reuired"
    },
    admin:{
        type:Boolean,
        default:true
    },
});
module.exports=mongoose.model('User',UserSchema);