const Dstnumber = require("../models/dstnumber");
const resp = require("../helpers/apiResponse");

exports.adddstnumber = async (req, res) => {
  const { dstnumber, ip, alottedtouser, plan, ivr, extensions, inusestatus } =
    req.body;

  const newDstnumber = new Dstnumber({
    dstnumber: dstnumber,
    ip: ip,
    alottedtouser: alottedtouser,
    plan: plan,
    ivr: ivr,
    extensions: extensions,
    inusestatus: inusestatus,
  });
  const findexist = await Dstnumber.findOne({ dstnumber: dstnumber });
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
