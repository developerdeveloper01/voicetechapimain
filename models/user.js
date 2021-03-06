const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    userimg: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png",
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    mobile:{
      type :Number
    },
    password: {
      type: String,
    },
    varifystatus: {
      type: Boolean,
      default: false,
    },
    organization_name: {
      type: String,
    },
    alloted_did: { type: Number },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", thisSchema);
