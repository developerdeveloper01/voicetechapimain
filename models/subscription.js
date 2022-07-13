const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  
  
  {
    userId :
      { type: Schema.Types.ObjectId, ref: "user" },
    
      plan:  { type: Schema.Types.ObjectId, ref: "user" },
  
      mihpayid: {
type:String
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("subscription", thisSchema);
