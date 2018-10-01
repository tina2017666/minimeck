const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InforSchema = new Schema({
  unitName: {
    type: String,
    required: [true, "unitName is Required"]
  }
});

//documents name
const Infor = mongoose.model("infor", InforSchema);
module.exports = Infor;
