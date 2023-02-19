const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: String,
  status: Boolean,
  id: String,
});

const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = {
  TodoModel,
};
