const getAllTasks = (req, res) => {
  res.send("GET ALL TASKS");
};

const createTask = (req, res) => {
  res.send("CREATE TASK");
};

const getTask = (req, res) => {
  res.send("GET TASK");
};

const updateTask = (req, res) => {
  res.send("UPDATE TASK");
};
const deleteTask = (req, res) => {
  res.send("DELETE TASK");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
