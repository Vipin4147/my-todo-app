const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(process.env.Api_key);

module.exports = {
  connection,
};
