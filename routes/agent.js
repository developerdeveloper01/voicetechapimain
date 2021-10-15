const express = require("express");
const router = express.Router();

const {
  addagent,
  editagent,
  viewoneagent,
  allagent,
  deleteagent,
} = require("../controllers/agent");

//Paths
router.post("/admin/addagent", addagent);
router.post("/admin/editagent/:id", editagent);
router.get("/admin/viewoneagent/:id", viewoneagent);
router.get("/admin/allagent", allagent);
router.get("/admin/deleteagent/:id", deleteagent);

module.exports = router;
