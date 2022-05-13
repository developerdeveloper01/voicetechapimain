const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
    },
    amount: {
      type: String,
    },

    company: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    service: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    qty: {
      type: Number,
      require: true,
    },
    subtotal: {
      type: Number,
      require: true,
    },
    tax: {
      type: Number,
      require: true,
    },
    productinfo: {
      type: String,
    },
    invoiceid: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("invoice", thisSchema);
