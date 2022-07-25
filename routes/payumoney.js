const express = require("express");
const router = express.Router();

const { paynownew, paysuccess, payfail,fetchallpays,payUMoneyPaymentResponse } = require("../controllers/payumoney");

//Paths
router.post("/admin/paynownew", paynownew);
router.get("/admin/paysuccess", paysuccess);
router.get("/admin/payfail", payfail);
 //router.get("/admin/fetchallpays", fetchallpays);

//router.post("/admin/verifypay", verifypay);
//router.get("/admin/payUMoneyPaymentResponse", payUMoneyPaymentResponse);

module.exports = router;
