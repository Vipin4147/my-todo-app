const express = require("express");

const { TodoModel } = require("../model/todomodel.js");

const todorouter = express.Router();

todorouter.get("/todos", async (req, res) => {
  let data = await TodoModel.find({});
  res.send(data);
});

todorouter.post("/todos/create", async (req, res) => {
  let data = req.body;

  const todo_data = await TodoModel(data);

  todo_data.save();
  res.send("data added");
});

todorouter.patch("/todos/:todoId", async (req, res) => {
  const ID = req.params.todoId;

  let data = req.body;

  let udata = await TodoModel.findByIdAndUpdate({ _id: ID }, data);

  res.send("data updated");
});

todorouter.delete("/todos/:todoId", async (req, res) => {
  const ID = req.params.todoId;

  let udata = await TodoModel.findByIdAndDelete({ _id: ID });

  res.send("data deleted");
});

module.exports = {
  todorouter,
};
