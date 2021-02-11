const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const Task = require('../models/task');
const tasksController = require('../controllers/tasksControllers');

//router.get('/', async (req, res) => {
//    const tasks = await Task.find();
//    console.log(tasks);
//    res.render('index', {
//        tasks : tasks
//    });
//});
router.get('/tasks', tasksController.tasks);

router.post('/add',  async(req,res) => {
    const task = new Task(req.body);
    await task.save();
    res.send('received');
});

router.get('/edit/:id', tasksController.tasksEdit);

router.get('/tasks/:id', tasksController.tasksId);

router.delete('/delete/:id', tasksController.taskDelete);



module.exports = router;