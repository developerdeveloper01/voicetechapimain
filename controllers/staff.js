const Staff = require("../models/staff");
const resp = require("../helpers/apiResponse");
const bcrypt = require("bcryptjs");
const key = "verysecretkey";
const jwt = require("jsonwebtoken");

exports.addstaff = async (req, res) => {
  const { firstname, lastname, email, mobile, password, approvedstatus, role,added_by } =
    req.body;

    //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newStaff = new Staff({
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobile: mobile,
    password: hashPassword,
    role: role,
    approvedstatus: approvedstatus,
    added_by: added_by,
  });

  const findexist = await Staff.findOne({
    $or: [{ email: email }, { mobile: mobile }],
  });
  if (findexist) {
    resp.alreadyr(res);
  } else {
    newStaff
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editstaff = async (req, res) => {
  await Staff.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonestaff = async (req, res) => {
  await Staff.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allstaff = async (req, res) => {
  await Staff.find().populate("role").populate("added_by")
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletestaff = async (req, res) => {
  await Staff.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
