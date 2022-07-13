const Subscription = require("../models/subscription");
const resp = require("../helpers/apiResponse");

exports.addSubscription = async (req, res) => {
    const {userId,plan, mihpayid } = req.body;
  
    const newSubscription = new Subscription({
      userId :userId,
      plan:plan,
      mihpayid:mihpayid
      
    });
    const findexist = await Subscription.findOne({  $and: [
        { userId:userId },
        { plan: plan }
      ] });
    if (findexist) {
      resp.alreadyr(res,'Title');
    } else {
        newSubscription
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    }
  };
  