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
    const edit = await TaskSchema.findByIdAndUpdate(id, req.body ,{
        new : true
    }); 
    res.json(edit);
};

const tasksId = async(req, res)=>{
   const id = req.params.id;
   const data = await TaskSchema.findById(id);
   res.json(data);
};
 const tasksDelete = async(req, res)=>{
     const  id  = req.params.id;
     const tasksdelete = await TaskSchema.findByIdAndDelete(id);
     res.json(tasksdelete);
};

const tasksAdd = async(req, res) => {   
    const {name, description} = req.body;
    const newtask = new TaskSchema({
        name, description
    });
    const savetasks = await newtask.save();
    res.json(savetasks);
}
module.exports = {tasks, tasksEdit, tasksId, tasksDelete, tasksAdd};