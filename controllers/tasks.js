const getAllTasks = (req, res) => {
    res.send('get all tasks');
}
const creatTask = (req, res) => {
    res.send('creat task');
}
const getTask = (req, res) => {
    res.send('get single task');
}
const updateTask = (req, res) => {
    res.send('update task');
}
const deleteTask = (req, res) => {
    res.send('delete task');
}




module.exports = {
    getAllTasks,
    creatTask,
    getTask,
    updateTask,
    deleteTask
};
