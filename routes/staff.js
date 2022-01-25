const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');
const { verifyToken } = require("../functions/admintoken");

const {
  addstaff,
  stafflogin,
  editstaff,
  viewonestaff,
  addsubstaff,
  viewstaffbytoken,
  allstaff,
  deletestaff,
  getstaffaddedbyuser
} = require("../controllers/staff");

//Paths
router.post("/admin/addstaff", addstaff);
router.post("/admin/stafflogin", stafflogin);
router.post("/admin/editstaff/:id", editstaff);
router.get("/admin/viewonestaff/:id", viewonestaff);
router.get("/admin/viewonestaff",verifyToken, viewstaffbytoken);
router.post("/admin/addsubstaff",verifyToken, addsubstaff);
router.get("/admin/viewmystaff",verifyToken, getstaffaddedbyuser);
router.get("/admin/allstaff", allstaff);
router.get("/admin/deletestaff/:id", deletestaff);

module.exports = router;
