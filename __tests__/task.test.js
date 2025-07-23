const mongoose = require('mongoose');
const Task = require('../classes/Task');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Task Model', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await Task.deleteMany({});
  });

  it('should detect overdue tasks', async () => {
    const pastDate = new Date(Date.now() - 86400000);
    const task = await Task.create({ title: 'Overdue', dueDate: pastDate, priority: 'High' });
    expect(task.isOverdue()).toBe(true);
  });

  it('should mark a task as complete', async () => {
    const task = await Task.create({ title: 'Complete', dueDate: new Date(), priority: 'Low' });
    task.markComplete();
    await task.save();
    const updated = await Task.findOne({ id: task.id });
    expect(updated.status).toBe('Completed');
  });
}); 