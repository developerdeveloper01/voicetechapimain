const express = require("express");
const router = express.Router();

const {
  addinvoice,
  editInvoice,
  viewoneInvoice,
  allInvoice,
  deleteInvoice,
} = require("../controllers/invoice");

//Paths
router.post("/user/addinvoice", addinvoice);
router.post("/user/editInvoice/:id", editInvoice);
router.get("/user/viewoneInvoice/:id", viewoneInvoice);
router.get("/user/allInvoice", allInvoice);
router.get("/user/deleteInvoice/:id", deleteInvoice);

module.exports = router;
