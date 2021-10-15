const Role = require("../models/role");
const resp = require("../helpers/apiResponse");

exports.addrole = async (req, res) => {
  const {
    name,
    sortorder,
    status,
    r_calldetails,
    w_calldetails,
    r_userdetails,
    w_userdetails,
    r_sip,
    w_sip,
    r_ivr,
    w_ivr,
  } = req.body;

  const newRole = new Role({
    name: name,
    sortorder: sortorder,
    status: status,
    r_calldetails: r_calldetails,
    w_calldetails: w_calldetails,
    r_userdetails: r_userdetails,
    w_userdetails: w_userdetails,
    r_sip: r_sip,
    w_sip: w_sip,
    r_ivr: r_ivr,
    w_ivr: w_ivr,
  });
  const findexist = await Role.findOne({ name: name });
  if (findexist) {
    resp.alreadyr(res);
  } else {
    newRole
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editrole = async (req, res) => {
  await Role.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonerole = async (req, res) => {
  await Role.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allrole = async (req, res) => {
  await Role.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deleterole = async (req, res) => {
  await Role.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
