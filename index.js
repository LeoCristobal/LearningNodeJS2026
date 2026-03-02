const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const PORT = 8888;

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.listen(PORT, () => console.log(`Connected to http://localhost:${PORT}`));
