const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('tasks', TaskSchema);