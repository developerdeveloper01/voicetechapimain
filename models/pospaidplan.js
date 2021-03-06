const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    plantype: {
      type: String,
      require: true,
    },
  

    plantitle: {
      type: String,
      require: true,
    },
    planprice: {
      type: Number,
    },
    validityday: {
      type: Number,
    },
    minute_balance: {
      type: Number,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pospaidplan", thisSchema);
