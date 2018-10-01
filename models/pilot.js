const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PilotSchema = new Schema({
  id: {
    type: String,
    required: [true, "Name is required"]
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  rank: {
    type: String,
    required: [true, "Age is required"]
  },
  gunnery: {
    type: String,
    required: [true, "Gender is required"]
  },

  piloting: {
    type: String,
    required: [true, "Password is required"]
  },
  age: {
    type: String,
    required: [true, "Age is required"]
  },
  mechType: {
    type: String,
    required: [true, "mechType is required"]
  }
});

//documents name
const Pilot = mongoose.model("pilot", PilotSchema);
module.exports = Pilot;
