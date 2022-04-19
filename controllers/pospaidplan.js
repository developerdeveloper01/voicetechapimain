const Pospaidplan = require("../models/pospaidplan");
const resp = require("../helpers/apiResponse");

exports.addpospaidplan = async (req, res) => {
  const { plantype,plantitle, planprice, validityday, minute_balance, desc } = req.body;

  const newPospaidplan = new Pospaidplan({
    plantype:plantype,
    plantitle: plantitle,
    planprice: planprice,
    validityday: validityday,
    minute_balance: minute_balance,
    desc: desc,
  });
  const findexist = await Pospaidplan.findOne({ plantitle: plantitle });
  if (findexist) {
    resp.alreadyr(res, "Title");
  } else {
    newPospaidplan
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};
exports.allpospaidplan = async (req, res) => {
  await Pospaidplan.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.viewonepospaidplan = async (req, res) => {
  await Pospaidplan.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.editpospaidplan = async (req, res) => {
  await Pospaidplan.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletepospaidplan = async (req, res) => {
  await Pospaidplan.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
