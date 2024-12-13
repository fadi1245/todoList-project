const express = require('express');
const router = express.Router();
const TaskModel = require('../model/taskmodel');

router.post('/addtask', async (req, res) => {
    try {
        const task = await TaskModel.create(req.body);
        res.status(201).json({ message: "Task added successfully", task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add task" });
    }
});

router.get('/gettasks', async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json({ message: "Tasks send successfully", tasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get tasks" });
    }
});

router.delete('/deletetask/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const result = await TaskModel.deleteOne({ _id: taskId });

        if (result.deletedCount > 0) {
            res.json({ message: "Task deleted successfully" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete task", error: err.message });
    }
});

router.put('/edittask/:id', async (req, res) => {
    const taskId = req.params.id;  
    const updatedTask = req.body;  

    try {
        const task = await TaskModel.findByIdAndUpdate(taskId, updatedTask, { new: true });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", task });
    } catch (err) {
        console.error('Error updating task:', err);
        res.status(500).json({ message: "Failed to update task", error: err.message });
    }
});


module.exports = router;
