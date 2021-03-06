const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  
  
  {
    userId :
      { type: Schema.Types.ObjectId, ref: "user" },
    
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

module.exports = mongoose.model("plan", thisSchema);
