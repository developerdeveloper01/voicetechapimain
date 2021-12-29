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
  viewstaffbytoken,
  allstaff,
  deletestaff,
  getstaffaddedbyuser
} = require("../controllers/staff");

//Paths
router.post("/admin/addstaff", addstaff);
router.post("/admin/stafflogin",body('mobile').isNumeric(),check('password')
.isLength({ min: 6 })
.withMessage('must be at least 6 chars long')
.matches(/\d/)
.withMessage('must contain a number'),stafflogin);
router.post("/admin/editstaff/:id", editstaff);
router.get("/admin/viewonestaff/:id", viewonestaff);
router.get("/admin/viewonestaff",verifyToken, viewstaffbytoken);
router.get("/admin/viewmystaff",verifyToken, getstaffaddedbyuser);
router.get("/admin/allstaff", allstaff);
router.get("/admin/deletestaff/:id", deletestaff);

module.exports = router;
