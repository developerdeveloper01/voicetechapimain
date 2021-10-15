const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dstNumberSchema = new Schema(
  {
    dstnumber: {
      type: Number,
    },
    ip: { type: Schema.Types.ObjectId, ref: "providedip" },
    alottedtouser: { type: Schema.Types.ObjectId, ref: "user" },
    plan: { type: Schema.Types.ObjectId, ref: "plan" },
    ivr: { type: String },
    extensions: { type: String },
    inusestatus: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dstnum", dstNumberSchema);
