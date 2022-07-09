const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  
  
  {
    
    firstname: {
        type: String,
       
      },
    
      lastname: {
      type: String,
     
    },
    email: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    productinfo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payumoney", thisSchema);
