const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dstNumberSchema = new Schema(
  {
    billingfor: {
      type: String
    },
    price: {
      type: Number
    },
    durationdays: {
      type: Number
    },
    gst: {
      type: Number
    },
    service: {
      type: String
    },
    status: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("billing", dstNumberSchema);
