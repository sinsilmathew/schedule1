const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const bodyParser = require('body-parser');

const addTask=function(req,res){
const NewTask = new Task({
    TaskId:req.body.TaskId,
    TaskName:req.body.TaskName,
    DateCreated:req.body.DateCreated
});
//console.log(NewTask);
NewTask.save(function(err){
    if(err)
    {
        //console.log('Error');
        res.json({'ERROR':err})
    }
    else
    {
       // console.log('Success');
        res.json({'SUCCESS':NewTask})
    }
})
}

const findAllTask = function(req,res){
    Task.find(function(err,tasks){
        if(err){
            res.json({'ERROR':err});
        }
        else{
            res.json(tasks);
        }
    });
}
module.exports.addTask = addTask;
module.exports.findAllTask = findAllTask;
