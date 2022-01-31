const express = require("express");
const router = express.Router();

const {
    systeminfo,
} = require("../controllers/systemdetail");

//Paths

router.get("/admin/systeminfo", systeminfo);

module.exports = router;
