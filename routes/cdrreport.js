const express = require("express");
const router = express.Router();

const {
  addcdrreport,
  viewonecdrreport,
  allcdrreport,
  deletecdrreport,
  viewreportsfromneronserver,
  addreportstomongodb,
  getdetailofonenumber,
  getcalleridofall
} = require("../controllers/cdrreport");

//Paths
router.post("/admin/addcdrreport", addcdrreport);
router.get("/admin/viewonecdrreport/:id", viewonecdrreport);
router.get("/admin/allcdrreport", allcdrreport);
router.get("/admin/deletecdrreport/:id", deletecdrreport);
router.get("/admin/viewreportsfromneronserver", viewreportsfromneronserver);
router.get("/admin/addreportstomongodb", addreportstomongodb);
router.get("/admin/getdetailofonenumber/id", getdetailofonenumber);
router.get("/admin/getcalleridofall", getcalleridofall);

module.exports = router;
