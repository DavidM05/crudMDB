const { json } = require('body-parser');
const { response } = require('express');
const task = require('../models/task');
const TaskSchema = require('../models/task');

const tasks = async (req, res) =>{
    const data = await TaskSchema.find();
    res.json(data);
};

const tasksEdit = async (req, res) =>{
    const id = req.params.id; 
    res.send(id);
};

const tasksId = async(req, res)=>{
   const id = req.params.id;
   const data = await TaskSchema.findById(id);
   res.json(data);
};
 const taskDelete = async(req, res)=>{
     const { id }  = req.params.id;
     await Task.remove({_id: id});
     res.redirect('/');
};
module.exports = {tasks, tasksEdit, tasksId, taskDelete};