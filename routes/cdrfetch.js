const express = require("express");
const router = express.Router();

const {
    addreportstomongodb,
} = require("../controllers/cdrfetch");

//Paths
router.post("/user/addreportstomongodb", addreportstomongodb);

module.exports = router;
