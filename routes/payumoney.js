const express = require("express");
const router = express.Router();

const { paynownew } = require("../controllers/payumoney");

//Paths
router.post("/admin/paynownew", paynownew);
//router.post("/admin/verifypay", verifypay);

module.exports = router;
