const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
  title: { type: String, required: true },
  kid: { type: String, required: true },
  reward: String,
  date: { type: Date, default: Date.now }
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;
