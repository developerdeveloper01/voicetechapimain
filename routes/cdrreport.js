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
  getdetailincoming,
  totalcallcount,
  missedcallcount,
  missedcalls,
  totalcalldetails,
  getreceivedcalls,
  getcalleridofall,
  getweekdaywisedata,
  regexsearch,
  allcdrcount
} = require("../controllers/cdrreport");

//Paths
router.post("/admin/addcdrreport", addcdrreport);
router.post("/admin/regexsearch", regexsearch);
router.get("/admin/viewonecdrreport/:id", viewonecdrreport);
router.get("/admin/allcdrreport", allcdrreport);
router.get("/admin/deletecdrreport/:id", deletecdrreport);
router.get("/admin/viewreportsfromneronserver", viewreportsfromneronserver);
router.get("/admin/addreportstomongodb", addreportstomongodb);
router.get("/admin/getweekdaywisedata", getweekdaywisedata);
router.get("/admin/getdetailofonenumber/:id", getdetailofonenumber);
router.get("/admin/outgoingcallcount/:id", outgoingcallcount);
router.get("/admin/incomingcallcount/:id", incomingcallcount);
router.get("/admin/getdetailincoming/:id", getdetailincoming);
router.get("/admin/totalcallcount/:id", totalcallcount);
router.get("/admin/totalcalldetails/:id", totalcalldetails);
router.get("/admin/missedcallcount/:id", missedcallcount);
router.get("/admin/missedcalls/:id", missedcalls);
router.get("/admin/getreceivedcalls/:id", getreceivedcalls);
router.get("/admin/getcalleridofall", getcalleridofall);
router.get("/admin/allcdrcount", allcdrcount);

module.exports = router;
