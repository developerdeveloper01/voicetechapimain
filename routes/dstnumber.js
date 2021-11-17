const express = require("express");
const router = express.Router();

const {
  adddstnumber,
  editdstnumber,
  viewonedstnumber,
  alldstnumber,
  deletedstnumber,
  addlldidno,
} = require("../controllers/dstnumber");

//Paths
router.post("/admin/adddstnumber", adddstnumber);
router.post("/admin/editdstnumber/:id", editdstnumber);
router.get("/admin/viewonedstnumber/:id", viewonedstnumber);
router.get("/admin/alldstnumber", alldstnumber);
router.get("/admin/addlldidno", addlldidno);
router.get("/admin/deletedstnumber/:id", deletedstnumber);

module.exports = router;
