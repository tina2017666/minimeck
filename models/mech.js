const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MechSchema = new Schema({
  Name: {
    type: String,
    required: [true, "unitName is Required"]
  },
  Model: {
    type: String,
    required: [true, "Age is required"]
  },
  Weight: {
    type: String,
    required: [true, "weight is required"]
  },
  Class: {
    type: String,
    required: [true, "class is required"]
  },
  unitName: {
    type: String,
    required: [true, "unit name is required"]
  }
});

//documents name
const Mech = mongoose.model("mech", MechSchema);
module.exports = Mech;
