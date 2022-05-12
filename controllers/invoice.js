const Invoice = require("../models/invoice");
const resp = require("../helpers/apiResponse");

exports.addinvoice = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    amount,
    productinfo,
    company,
    address,
    service,
    desc,
    qty,
    subtotal,
    tax,
  } = req.body;

  const newInvoice = new Invoice({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    amount: amount,
    productinfo: productinfo,
    txnid: Math.floor(Math.random() * 100000),
    company: company,
    address: address,
    service: service,
    desc: desc,
    qty: qty,
    subtotal: subtotal,
    tax: tax,
  });
  const findexist = await Invoice.findOne({ phone: phone });
  if (findexist) {
    resp.alreadyr(res, "Name");
  } else {
    newInvoice
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editInvoice = async (req, res) => {
  await Inquiry.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewoneInvoice = async (req, res) => {
  await Invoice.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allInvoice = async (req, res) => {
  await Invoice.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deleteInvoice = async (req, res) => {
  await Invoice.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
