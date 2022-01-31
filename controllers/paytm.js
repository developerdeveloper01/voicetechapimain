/* import checksum generation utility */
var PaytmChecksum = require("paytmChecksum");

var paytmParams = {};

/* initialize an array */
paytmParams["MID"] = "hUrIPQ70388081414462";//hUrIPQ70388081414462
paytmParams["ORDERID"] = "neworder_12345";

exports.paytmpay = async (req, res) => {
  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  console.log(req.body)

  var paytmChecksum = PaytmChecksum.generateSignature(
    paytmParams,
    "Z2@Dn0smzMJbC!N9"
  );
  //console.log(paytmChecksum);
  paytmChecksum
    .then(function (checksum) {
      console.log("generateSignature Returns: " + checksum);
      res.json(checksum);
    })
    .catch(function (error) {
      console.log(error);
      res.json(error);
    });
};

exports.verifypay = async (req, res) => {
  /* import checksum generation utility */
console.log(req.body)
  paytmChecksum = req.body.CHECKSUMHASH;
  delete req.body.CHECKSUMHASH;

  var isVerifySignature = PaytmChecksum.verifySignature(
    paytmParams,
    "Z2@Dn0smzMJbC!N9",
    paytmChecksum
  );
  if (isVerifySignature) {
    console.log("Checksum Matched");
  } else {
    console.log("Checksum Mismatched");
  }
};

var PaytmConfig = {
  mid: "YOUR MERCHANT ID",
  key: "YOUR MERCHANT KEY",
  website: "WEBSTAGING"
};
module.exports.PaytmConfig = PaytmConfig;
