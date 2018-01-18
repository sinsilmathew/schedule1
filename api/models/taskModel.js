const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    TaskId:{
        type:Number,
        required:"ID required"
    },
    TaskName:{
        type:String,
        required : "Task Name Required"
    },
    DateCreated:{
        type:Date,
        required:"Date creation required"
    }
});
module.exports = mongoose.model('Task',TaskSchema);