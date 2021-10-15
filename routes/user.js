const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/tokenverify");

const { signup, login, setting } = require("../controllers/user");

router.post("/user/signup", signup);
router.post("/user/login", login);
router.post("/user/setting", verifyToken, setting);

module.exports = router;
