const Dstnumber = require("../models/dstnumber");
const resp = require("../helpers/apiResponse");
const fs = require("fs");

exports.adddstnumber = async (req, res) => {
  const { did_no, ip, alottedtouser, plan, ivr, extensions, is_used } =
    req.body;

  const newDstnumber = new Dstnumber({
    did_no: did_no,
    ip: ip,
    alottedtouser: alottedtouser,
    plan: plan,
    ivr: ivr,
    extensions: extensions,
    is_used: is_used,
  });
  const findexist = await Dstnumber.findOne({ did_no: did_no });
  if (findexist) {
    resp.alreadyr(res);
  } else {
    newDstnumber
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editdstnumber = async (req, res) => {
  await Dstnumber.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonedstnumber = async (req, res) => {
  await Dstnumber.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.alldstnumber = async (req, res) => {
  await Dstnumber.find()
    .sort({ sortorder: 1 })
    .populate("ip")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletedstnumber = async (req, res) => {
  await Dstnumber.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.addlldidno = async (req, res) => {
  const getnumbers = require("../data.json");
  console.log(getnumbers);
  res.send(getnumbers.numbers)
  await Dstnumber.insertMany(getnumbers.numbers)
  .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
