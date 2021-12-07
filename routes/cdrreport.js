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
  outgoingcallcount,
  incomingcallcount,
  totalcallcount,
  missedcallcount,
  getreceivedcalls,
  getcalleridofall
} = require("../controllers/cdrreport");

//Paths
router.post("/admin/addcdrreport", addcdrreport);
router.get("/admin/viewonecdrreport/:id", viewonecdrreport);
router.get("/admin/allcdrreport", allcdrreport);
router.get("/admin/deletecdrreport/:id", deletecdrreport);
router.get("/admin/viewreportsfromneronserver", viewreportsfromneronserver);
router.get("/admin/addreportstomongodb", addreportstomongodb);
router.get("/admin/getdetailofonenumber/:id", getdetailofonenumber);
router.get("/admin/outgoingcallcount/:id", outgoingcallcount);
router.get("/admin/incomingcallcount/:id", incomingcallcount);
router.get("/admin/totalcallcount/:id", totalcallcount);
router.get("/admin/missedcallcount/:id", missedcallcount);
router.get("/admin/getreceivedcalls/:id", getreceivedcalls);
router.get("/admin/getcalleridofall", getcalleridofall);

module.exports = router;
