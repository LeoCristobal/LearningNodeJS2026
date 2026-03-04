const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("THE MONGODB IS CONNECTED SUCCESSFULLY "))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
