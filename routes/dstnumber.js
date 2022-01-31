const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/admintoken");

const {
  adddstnumber,
  editdstnumber,
  viewonedstnumber,
  alldstnumber,
  deletedstnumber,
  addlldidno,
  mydstnumbers,
  staffdstnumbers
} = require("../controllers/dstnumber");

//Paths
router.post("/admin/adddstnumber", adddstnumber);
router.post("/admin/editdstnumber/:id", editdstnumber);
router.get("/admin/viewonedstnumber/:id", viewonedstnumber);
router.get("/admin/alldstnumber", alldstnumber);
router.get("/admin/addlldidno", addlldidno);
router.get("/admin/mydstnumbers",verifyToken, mydstnumbers);
router.get("/admin/staffdstnumbers/:id", staffdstnumbers);
router.get("/admin/deletedstnumber/:id", deletedstnumber);

module.exports = router;
