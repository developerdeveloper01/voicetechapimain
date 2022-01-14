const express = require("express");
const router = express.Router();

const {
  addchat,
  allchat,
  deletechat,
  allchatwithuser,
  getallchatrooms,
  markasread,
  deleteallchat
} = require("../controllers/chat");

//Paths
router.post("/admin/addchat", addchat);
router.get("/admin/allchat", allchat);
router.get("/admin/getallchatrooms", getallchatrooms);
router.get("/admin/allchatwithuser/:id", allchatwithuser);
router.get("/admin/markasread/:id", markasread);
router.get("/admin/deletechat/:id", deletechat);
router.get("/admin/deleteallchat/:id", deleteallchat);

module.exports = router;
