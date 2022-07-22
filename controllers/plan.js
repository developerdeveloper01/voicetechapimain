const Plan = require("../models/plan");
const resp = require("../helpers/apiResponse");

exports.addplan = async (req, res) => {
  const { userId,plantype,plantitle, planprice, validityday, minute_balance, desc } = req.body;

  const newPlan = new Plan({
    userId :userId,
   // mihpayid:mihpayid,
    plantype:plantype,
    plantitle: plantitle,
    planprice: planprice,
    validityday: validityday,
    minute_balance: minute_balance,
    desc: desc,
  });
  const findexist = await Plan.findOne({ plantitle: plantitle });
  if (findexist) {
    resp.alreadyr(res,'Title');
  } else {
    newPlan
    .save()
    .then(async(data)=>{
      if(data.get("mihpayid") != undefined || data.get("mihpayid") !=null || data.get("mihpayid") || data.get //("razorpay_payment_id").length <=0 )
      )
 {
//console.log(data)
//let x = data.get
let x = await Subscription.findOne({seller: req.sellerId }).populate("seller")
console.log(x)
// var newarr = x.map(function (value) {
//   return value.hasSubscribed
// })
//let bb = x.map(hasSubscribed)
// let z = x.hasSubscribed
 //console.log("ABC",z)


console.log("string",x)
  if(x){
    const y = await seller.findOneAndUpdate(
            { _id:req.sellerId },
            { $set: { hasSubscribed: true } },
            { new: true }
    )
    // console.log("bunny",x)
     //console.log(y)
    // console.log("true", y);
    .then((data) => {
    res.status(200).json({
      status: true,
          msg: "success",
          date : det
         // date : 
        //  data: data,
        // seller:y
    })
     })
    .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });
     //     console.log(y)
    //     console.log("true", y);
  } 
      }
      
    })
     
      // .then((data) => resp.successr(res, data))
      // .catch((error) => resp.errorr(res, error));
  }

}
exports.editplan = async (req, res) => {
  await Plan.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewoneplan = async (req, res) => {
  await Plan.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allplan = async (req, res) => {
  await Plan.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deleteplan = async (req, res) => {
  await Plan.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};

