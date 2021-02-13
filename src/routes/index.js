const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const Task = require('../models/task');
const tasksController = require('../controllers/tasksControllers');


router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', {
      tasks
    });
  });
  
  router.post('/add', async (req, res, next) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
  });
  
  router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    console.log(task)
    res.render('edit', { task });
  });
  
  router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/');
  });
  
  router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
  });
router.put('/edit/:id', tasksController.tasksEdit);

router.get('/tasks/:id', tasksController.tasksId);

router.post('/add1', tasksController.tasksAdd);

router.delete('/delete1/:id', tasksController.tasksDelete);




module.exports = router;