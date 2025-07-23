const mongoose = require('mongoose');
const TaskManager = require('../classes/TaskManager');
const Task = require('../classes/Task');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('TaskManager', () => {
  let mongoServer;
  let taskManager;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
    taskManager = new TaskManager();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await Task.deleteMany({});
  });

  it('should add a task', async () => {
    const data = { title: 'Test', description: 'desc', dueDate: new Date(), priority: 'High' };
    await taskManager.addTask(data);
    const tasks = await Task.find({});
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test');
  });

  it('should view tasks', async () => {
    await Task.create({ title: 'View', dueDate: new Date(), priority: 'Low' });
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await taskManager.viewTasks();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should update a task', async () => {
    const task = await Task.create({ title: 'Old', dueDate: new Date(), priority: 'Medium' });
    await taskManager.updateTask(task.id, { title: 'New' });
    const updated = await Task.findOne({ id: task.id });
    expect(updated.title).toBe('New');
  });

  it('should delete a task', async () => {
    const task = await Task.create({ title: 'Del', dueDate: new Date(), priority: 'Low' });
    await taskManager.deleteTask(task.id);
    const found = await Task.findOne({ id: task.id });
    expect(found).toBeNull();
  });
}); 