const mongoose = require("mongoose");
const newSchemas = new mongoose.Schema({
  tickets: Number,
  amount: Number,
  order_id: String,
  payment_id: String,
});

module.exports = mongoose.model("User", newSchemas);

