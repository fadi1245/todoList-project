const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    duedate: {type:Date, required: true},
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'], 
    },
}, { timestamps: true }); 

const TaskModel = mongoose.model('Task_Table', taskSchema);

module.exports = TaskModel;
