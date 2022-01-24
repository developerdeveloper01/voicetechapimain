const express = require("express");
const router = express.Router();

const { paytmpay, verifypay } = require("../controllers/paytm");

//Paths
router.get("/admin/paytmpay", paytmpay);
router.post("/admin/verifypay", verifypay);

module.exports = router;
