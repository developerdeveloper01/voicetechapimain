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
const jsSHA = require('jssha');

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



 


exports.paynownew = async(req, res) => {
  console.log(req.body);
  const { firstname, name, lastname, email, phone, amount, productInfo ,status} =
    req.body;
  var requestBody = {
    firstname: name,
    lastname: name,
    email: email,
    phone: phone,
    amount: amount,
    productinfo: productInfo,
    txnid: Math.floor(Math.random() * 100000),
    status: status,
    //this must be a genrated at your side
    surl: "http://3.111.139.178/v1/api/admin/paysuccess", //http://localhost:6789/api/admin/paynownew
    furl: "http://3.111.139.178/v1/api/admin/payfail"
  };
  console.log(requestBody);

  //  let result = await PayUmoney.create(requestBody);
  payumoney.pay(requestBody, function (error, response) {
    if (error) {
      console.log(error);
      res.json({
        error
      });
    } else {
      
      //callback(null, { payulink: response });
      // You will get a link in response to redirect to payUMoney
      res.send({
       // code:200,msg:'successfully',data:requestBody
         response,
      });
     
      
      console.log("STRING",response)
      console.log("DATA",requestBody);
      
    }
   // result = await PayUmoney.create(requestBody);
  });
   // result = await PayUmoney.create(requestBody);
};





 
// exports.payUMoneyPaymentResponse = function (req, res) {
//   var pay = req.body;
//   //Generate new Hash 
//    var hashString =  '|' + pay.status + '||||||||||' + '|' + pay.email + '|' + pay.firstname + '|' + pay.productinfo + '|' + pay.amount + '|' + pay.txnid 
//    var sha = new jsSHA('SHA-512', "TEXT");
//    sha.update(hashString)
//    var hash = sha.getHash("HEX");
//    // Verify the new hash with the hash value in response
//    if (hash == pay.hash) {
//        res.send({'status':pd.status});
//    } else {
//        res.send({'status':"Error occured"});
//    }
// }
exports.fetchallpays = async (req, res) => {
 const alldaa =  payumoney
    .pay({
      from: "2022-07-17",
      to: "2022-05-22",
    })
     
      res.send(req.body);
     
    // .then((response) => {
    //   res.json({
    //     response: response,
    //   });
    // })
    // .catch((error) => {
    //   res.json({
    //     error: error,
    //   });
    // });
};


exports.paysuccess = async (req, res) => {
  console.log(req.body);
  console.log(res, "success response");
  // alert(res, "payment successfull");
  // window.close();
 

  res.send(req.body);
 // res.redirect("http://3.111.139.178/#/transaction-success");
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

 