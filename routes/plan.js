const express = require("express");
const router = express.Router();

const {
  addplan,
  editplan,
  viewoneplan,
  allplan,
  deleteplan,
} = require("../controllers/plan");

//Paths
router.post("/user/addplan", addplan);
router.post("/user/editplan/:id", editplan);
router.get("/user/viewoneplan/:id", viewoneplan);
router.get("/user/allplan", allplan);
router.get("/user/deleteplan/:id", deleteplan);

module.exports = router;
