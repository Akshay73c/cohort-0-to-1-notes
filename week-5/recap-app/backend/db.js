const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:q7WFPbNLtI2jILjt@cluster0.yr68gpq.mongodb.net/todo-app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
