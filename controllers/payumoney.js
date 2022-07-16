// const jsSHA = require("jssha");
// const sha = new jsSHA("SHA-512", "TEXT");

//sha.update(hashString);//update function

//https://sandboxsecure.payu.in/_payment
//sandbox url

//Production Url
//https://secure.payu.in/_payment

 const key = "tAWheb";
// const command="get_Transaction_Details";
// const var1="2020-10-20";
// const salt = "6TACoPSn";

// let k = SHA512(key|command|var1|salt)
// console.log(k)
const Plan = require("../models/plan");
 const User = require("../models/user");
const PayUmoney = require("../models/payumoney")
var payumoney = require("payumoney_nodejs");
payumoney.setProdKeys(
  "tAWheb", //MERCHANT_KEY,
  "6TACoPSn", //MERCHANT_SALT,
  "authorization"
);
// payumoney
//   .setSandboxKeys
//   //MERCHANT_KEY,
//   //MERCHANT_SALT,
//   //PAYUMONEY_AUTHORIZATION_HEADER
//   ();
payumoney.isProdMode(true);



exports.paynownew =async (req, res) => {
  const plandetail = await Plan.findOne({ _id: req.params.planId });
  if (plandetail) {
    console.log(plandetail)
    const userdetail = await User.findOne({ _id: req.params.userId });
    if (userdetail) {
      console.log(userdetail)
      var data = new Insta.PaymentData();

      data.purpose = plandetail.plantitle;
      data.buyer_name = `${userdetail?.firstname} ${userdetail?.lastname}`;
      data.email = userdetail.email;
      data.phone = userdetail.mobile;
      // data.send_sms = "False";
      // data.send_email = "False";
     // data.amount = plandetail.website_rate;
      data.currency = "INR";
     // data.setRedirectUrl("http://localhost:4200/membership-detail");

      Insta.createPayment(data, function (error, response) {
        if (error) {
          res.send(error);
        } else {
          //res.send(response);

          const jresponse = JSON.parse(response);

          const newpayreq = new PayUmoney({
            purpose: jresponse.payment_request.purpose,
            amount: jresponse.payment_request.amount,
            mobile: jresponse.payment_request.mobile, 
            buyer_name: jresponse.payment_request.buyer_name,
            created_at: jresponse.payment_request.created_at,
            email: jresponse.payment_request.email,
            id: jresponse.payment_request.id,
            longurl: jresponse.payment_request.longurl,
            status: jresponse.payment_request.status,
          })
            .save()
            .then((data) => {
              res.status(200).json({
                status: true,
                msg: "success",
                data: data,
                response: jresponse,
              });
            })
            .catch((error) => {
              res.status(400).json({
                status: false,
                msg: "error",
                error: error,
              });
            });
        }
      });
    } else {
      res.status(400).json({
        status: false,
        msg: "User not found",
        error: "error",
      });
    }
  } else {
    res.status(400).json({
      status: false,
      msg: "Plan not found",
      error: "error",
    });
  }
};


// exports.paynownew =async (req, res) => {
//   console.log(req.body);
//   const { firstname, name, lastname, email, phone, amount, productInfo } =
//     req.body;
//   var requestBody = {
//     firstname: name,
//     lastname: name,
//     email: email,
//     phone: phone,
//     amount: amount,
//     productinfo: productInfo,
//     txnid: Math.floor(Math.random() * 100000), //this must be a genrated at your side
//     surl: "http://3.111.139.178/v1/api/admin/paysuccess", //http://localhost:6789/api/admin/paynownew
//     furl: "http://3.111.139.178/v1/api/admin/payfail"
//   };
//   console.log("Req Body",requestBody);
//   //let result = await payumoney.create(requestBody);

//   payumoney.pay(requestBody, function (error, response) {
//     if (error) {
//       console.log(error);
//       res.json({
//         error
//       });
//     } else {
//       //callback(null, { payulink: response });
//       // You will get a link in response to redirect to payUMoney
//       res.json({
//         response
//       });
//       console.log("res",response);
//     }
//   });
// };

exports.paysuccess = async (req, res) => {
  console.log(req.body);
  console.log(res, "success response");
  alert(res, "payment successfull");
  window.close();
  //res.send(req.body);
  //res.redirect("http://3.111.139.178/#/transaction-success");
  // res
  //   .writeHead(400, {
  //     Location: `http://localhost:4200/#/dashboard`
  //   })
  //   .end();
};

exports.payfail = async (req, res) => {
  console.log(req.body);
  //res.send(req.body);
  res.redirect("http://3.111.139.178/#/transaction-failed");
};


// const request = require("request");
// exports.paynow = (req, res) => {
//   req.body.txnid = req.body.email = req.user.email; //Here pass txnid and it should be different on every call
//   req.body.firstname = req.user.firstname;
//   //Here save all the details in pay object
//   const pay = req.body;
//   const hashString =
//     "YOUR_MERCHANT_KEY" + //store in in different file
//     "|" +
//     pay.txnid +
//     "|" +
//     pay.amount +
//     "|" +
//     pay.productinfo +
//     "|" +
//     pay.firstname +
//     "|" +
//     pay.email +
//     "|" +
//     "||||||||||" +
//     "YOUR_MERCHANT_SALT"; //store in in different file
//   const sha = new jsSHA("SHA-512", "TEXT");
//   sha.update(hashString);
//   //Getting hashed value from sha module
//   //const hash = sha.getHash("HEX");

//   //We have to additionally pass merchant key to API so remember to include it.
//   pay.key = "YOUR_MERCHANT_KEY"; //store in in different file;
//   pay.surl = "PROVIDE SUCCESS URL ROUTE";
//   pay.furl = "PROVIDE FAILRE URL ROUTE";
//   pay.hash = hash;
//   //Making an HTTP/HTTPS call with request
//   request.post(
//     {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       url: "https://sandboxsecure.payu.in/_payment", //Testing url
//       form: pay
//     },
//     function (error, httpRes, body) {
//       if (error) res.send({ status: false, message: error.toString() });
//       if (httpRes.statusCode === 200) {
//         res.send(body);
//       } else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
//         res.redirect(httpRes.headers.location.toString());
//       }
//     }
//   );
// };


// exports.payUMoneyPayment = async (req, res) => {
//   //var jsSHA = require('jssha');
//   if (
//     !req.body.txnid ||
//     !req.body.amount ||
//     !req.body.productinfo ||
//     !req.body.firstname ||
//     !req.body.email
//   ) {
//     res.send('Mandatory fields missing');
//   } else {
//     var pd = req.body;
//     var hashString =
//       'tAWheb' + // Merchant Key
//       '|' +
//       pd.txnid +
//       '|' +
//       pd.amount +
//       '|' +
//       pd.productinfo +
//       '|' +
//       pd.firstname +
//       '|' +
//       pd.email +
//       '|' +
//       '||||||||||' +
//       'JDhIbyZwnM'; // Your salt value
//     var sha = new jsSHA('SHA-512', 'TEXT');
//     sha.update(hashString);
//     var hash = sha.getHash('HEX');
//     res.send({ hash: hash });
//   }
// };


// exports.fetchallpays = async (req, res) => {
//   payumoney
//     .all({
//       from: "2022-07-10",
//       to: "2022-07-13",
//     })
//     .then((response) => {
//       res.json({
//         response: response,
//       });
//     })
//     .catch((error) => {
//       res.json({
//         error: error,
//       });
//     });
// };