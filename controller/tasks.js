const getAllTasks = (req, res) => {
  res.send("GET ALL TASKS - GET METHOD");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ updating: req.params.id });
};
const deleteTask = (req, res) => {
  res.json({ deleting: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
