const { json } = require('body-parser');
const { response } = require('express');
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
     const id = req.params.id;
     res.json(data);
};
module.exports = {tasks, tasksEdit, tasksId, taskDelete};