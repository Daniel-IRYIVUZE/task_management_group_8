const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TaskSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

TaskSchema.methods.isOverdue = function() {
  return this.status === 'Pending' && new Date() > this.dueDate;
};

TaskSchema.methods.markComplete = function() {
  this.status = 'Completed';
};

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task; 