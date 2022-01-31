const Agent = require("../models/agent");
const resp = require("../helpers/apiResponse");

exports.addagent = async (req, res) => {
  const { firstname, lastname, email, mobile, password, approvedstatus, role } =
    req.body;

  const newAgent = new Agent({
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobile: mobile,
    password: password,
    role: role,
    approvedstatus: approvedstatus,
  });

  const emailexist = await Agent.findOne({ email: email });
  const numberexist = await Agent.findOne({ mobile: mobile });
  if (emailexist) {
    resp.alreadyr(res,'Email');
  }else if (numberexist) {
    resp.alreadyr(res,'Mobile');
  } else {
    newAgent
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editagent = async (req, res) => {
  await Agent.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewoneagent = async (req, res) => {
  await Agent.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allagent = async (req, res) => {
  await Agent.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deleteagent = async (req, res) => {
  await Agent.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
