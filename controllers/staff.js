const Staff = require("../models/staff");
const resp = require("../helpers/apiResponse");
const bcrypt = require("bcryptjs");
const key = "verysecretkey";
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const staff = require("../models/staff");

exports.addstaff = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    mobile,
    password,
    approvedstatus,
    role,
    added_by,
  } = req.body;

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

exports.addsubstaff = async (req, res) => {
  const { firstname, lastname, email, mobile, password, approvedstatus, role } =
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
    added_by: req.staffId,
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

exports.stafflogin = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json(errors);
  // }

  const { mobile, email, password } = req.body;

  // if(body('mobile')){
  //   console.log(body('mobile'))
  // }

  const staff = await Staff.findOne({
    $or: [{ mobile: mobile }, { email: email }],
  }).populate("role");
  if (staff) {
    console.log(staff);
    if (staff.approvedstatus == true ) {
      const validPass = await bcrypt.compare(password, staff.password);
      if (validPass) {
        const token = jwt.sign(
          {
            staffId: staff._id,
          },
          key,
          {
            expiresIn: "365d",
          }
        );
        res.header("ad-token", token).status(200).send({
          status: true,
          ad_token: token,
          msg: "success",
          staff: staff,
        });
      } else {
        res.status(400).json({
          status: false,
          msg: "Incorrect Password",
          error: "error",
        });
      }
    } else {
      res.status(400).json({
        status: false,
        msg: "Profile is under verification",
        error: "error",
      });
    }
  } else {
    res.status(400).json({
      status: false,
      msg: "Staff Doesnot Exist",
      error: "error",
    });
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

exports.viewstaffbytoken = async (req, res) => {
  await Staff.findOne({ _id: req.staffId })
    .populate("role")
    .populate("added_by")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allstaff = async (req, res) => {
  await Staff.find()
    .populate("role")
    .populate("added_by")
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.getstaffaddedbyuser = async (req, res) => {
  await Staff.find({
    $and: [{ added_by: req.staffId }, { _id: { $ne: req.staffId } }],
  })
    .populate("role")
    .populate("added_by")
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletestaff = async (req, res) => {
  await Staff.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
