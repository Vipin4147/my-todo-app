const express = require("express");

require("dotenv").config();

const { connection } = require("./configs/db.js");

const { todorouter } = require("./routes/todoroutes.js");

const app = express();

app.use(express.json());

app.use(todorouter);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log("connected to database");
});
