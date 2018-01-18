const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('../server');
const Task = require('../api/models/taskModel');
const should = chai.should();
chai.use(chaiHttp);

describe('Tasks',function(){
    this.timeout(5000);
   // Task.collection.drop();
    beforeEach(function(done){
        var newTask = new Task({
            TaskId:123456,
            TaskName:"Task6",
            DateCreated:"10-10-2010"
        });
        newTask.save(function(err){
            done();
        });
    });
    afterEach(function(done){
        Task.collection.drop();
        done();
    });

it('should add a SINGLE Task on /newtask POST',function(done){
    chai.request(server)
    .post('/newtask')
    .send({'TaskId':123456,'TaskName':'Task6','DateCreated':'10-10-2010'})
    .end(function(err,res){
       // console.log(res.body.SUCCESS);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('TaskId');
        res.body.SUCCESS.should.have.property('TaskName');
       // res.body.SUCCESS.should.have.property('DateCreated');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.TaskId.should.equal(123456);
        res.body.SUCCESS.TaskName.should.equal('Task6');
        //res.bosy.SUCCESS.DateCreated.should.equal('10-10-2010');
        done();


    });
});

it('should should list ALL Task on /alltask GET',function(done){
    chai.request(server)
    .get('/alltask')
    .end(function(err,res){
     //   console.log(res.body[0]);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('TaskId');
        res.body[0].should.have.property('TaskName');
        res.body[0].TaskId.should.equal(123456);
        res.body[0].TaskName.should.equal('Task6');
        done();
    })
})

});

