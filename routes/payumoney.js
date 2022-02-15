const express = require("express");
const router = express.Router();

const { paynownew, paysuccess, payfail } = require("../controllers/payumoney");

//Paths
router.post("/admin/paynownew", paynownew);
router.post("/admin/paysuccess", paysuccess);
router.post("/admin/payfail", payfail);
//router.post("/admin/verifypay", verifypay);

module.exports = router;
