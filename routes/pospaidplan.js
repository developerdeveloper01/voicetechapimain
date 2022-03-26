const express = require("express");
const router = express.Router();

const {
  addpospaidplan,
  editpospaidplan,
  viewonepospaidplan,
  allpospaidplan,
  deletepospaidplan,
} = require("../controllers/pospaidplan");

//Paths
router.post("/admin/addpospaidplan", addpospaidplan);
router.post("/admin/editpospaidplan/:id", editpospaidplan);
router.get("/admin/viewonepospaidplan/:id", viewonepospaidplan);
router.get("/admin/allpospaidplan", allpospaidplan);
router.get("/admin/deletepospaidplan/:id", deletepospaidplan);

module.exports = router;
