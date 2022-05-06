const task = require('../modules/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.json({msg: error.message})
    }
}
const creatTask = async (req, res) => {
    try {
        const tasks = await task.create(req.body)
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
const getTask = async (req, res) => {
    try {
        const tasks = await task.findOne({_id : req.params.id});
        if (!tasks)
        {
            return res.status(404).json({ msg:`no such task with id : ${req.params.id}` });
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error});
    }
    
}
const deleteTask = async (req, res) => {
    try {
        const tasks = await task.findOneAndDelete({_id : req.params.id}) 
        if (!tasks)
        {
            return res.status(404).json({ msg:`no such task with id : ${req.params.id}` });
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error});
    }
}

const updateTask = async (req, res) => {
    try {
        const tasks = await task.findOneAndUpdate({_id: req.params.id}, req.body, {
            new : true,
            runValidators : true
        })
        if (!tasks)
        {
            return res.status(404).json({ msg:`no such task with id : ${req.params.id}` });
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error });

    }
}



module.exports = {
    getAllTasks,
    creatTask,
    getTask,
    updateTask,
    deleteTask
};
