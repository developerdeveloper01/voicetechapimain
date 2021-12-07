const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/tokenverify");

const {
  signup,
  login,
  setting,
  viewoneuser,
  edituser,
  allusers,
  allotnumbertouser,
  deleteuser,
  myprofile
} = require("../controllers/user");

router.post("/user/signup", signup);
router.post("/user/login", login);
router.post("/user/setting", verifyToken, setting);
router.get("/user/myprofile", verifyToken, myprofile);
router.post("/admin/edituser/:id", edituser);
router.get("/admin/viewoneuser/:id", viewoneuser);
router.get("/user/allusers", allusers);
router.get("/admin/permitnumber/:uid/:nid", allotnumbertouser);
router.get("/admin/deleteuser/:id", deleteuser);

module.exports = router;
