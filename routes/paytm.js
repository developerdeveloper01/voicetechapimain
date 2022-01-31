const express = require("express");
const router = express.Router();

const { paytmpay, verifypay } = require("../controllers/paytm");

//Paths
router.post("/admin/paytmpay", paytmpay);
router.post("/admin/verifypay", verifypay);

module.exports = router;
