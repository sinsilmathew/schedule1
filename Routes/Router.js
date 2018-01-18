module.exports=function(app){
    const TaskActions = require('../api/controllers/taskController');
    app.route('/newtask')
    .post(TaskActions.addTask);

    app.route('/alltask')
    .get(TaskActions.findAllTask);
    };