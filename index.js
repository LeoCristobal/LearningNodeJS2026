require("dotenv").config();
require("./database/connection");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./database/connection");
const PORT = 8888;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Connected to http://localhost:${PORT}`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
app.use(express.json());

app.use("/api/v1/tasks", tasks);
