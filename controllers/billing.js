const Billing = require("../models/billing");
const resp = require("../helpers/apiResponse");

exports.addbilling = async (req, res) => {
  const { billingfor, price, durationdays, gst, service, status } = req.body;

  const newBilling = new Billing({
    billingfor: billingfor,
    price: price,
    durationdays: durationdays,
    gst: gst,
    service: service,
    status: status
  });
  newBilling
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.editbilling = async (req, res) => {
  await Billing.findOneAndUpdate(
    {
      _id: req.params.id
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonebilling = async (req, res) => {
  await Billing.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allbilling = async (req, res) => {
  await Billing.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletebilling = async (req, res) => {
  await Billing.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
