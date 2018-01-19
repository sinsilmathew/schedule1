module.exports=function(app){
    const TaskActions = require('../api/controllers/taskController');
    const UserActions = require('../api/controllers/userController');
    const AuthActions = require('../api/controllers/authController')
    app.route('/newtask')
    .post(TaskActions.addTask);

    app.route('/alltask')
    .get(TaskActions.findAllTask);

    app.route('/addUser')
    .post(UserActions.addUser);

    app.route('/auth')
    .post(AuthActions.authentication);
    };