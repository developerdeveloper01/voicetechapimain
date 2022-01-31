// const SHA512 = require('sha512');

// const key = "tAWheb";
// const command="get_Transaction_Details";
// const var1="2020-10-20";
// const salt = "6TACoPSn";

// let k = SHA512(key|command|var1|salt)
// console.log(k)

var payUMoney = require('payumoney_nodejs');
  payumoney.setProdKeys(MERCHANT_KEY, MERCHANT_SALT, PAYUMONEY_AUTHORIZATION_HEADER);
  payumoney.setSandboxKeys(MERCHANT_KEY, MERCHANT_SALT, PAYUMONEY_AUTHORIZATION_HEADER);
  payUMoney.isProdMode(false);


  
  var requestBody = {
    "firstname" : "",
    "lastname" : "",
    "email" : "",
    "phone" : 9911223344,
    "amount" : 100,
    "productinfo" : "",
    "txnid" : "", //this must be a genrated at your side
    "surl" : "http:localhost:8080/payment/success",
    "furl" : "http:localhost:8080/payment/failure"
  };


  payUMoney.pay(requestBody, function(error, response) {
    if (error) {
      // Some error console.log(response);
    } else {
      // You will get a link in response to redirect to payUMoney
     callback(null, { 'payulink' : response });
    }
  });