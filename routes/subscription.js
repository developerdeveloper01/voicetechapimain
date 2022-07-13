const express = require("express");
const router = express.Router();

const {
    addSubscription,
//   editplan,
//   viewoneplan,
//   allplan,
//   deleteplan,
} = require("../controllers/subscription");

//Paths
router.post("/user/addSubscription", addSubscription);
// router.post("/admin/editplan/:id", editplan);
// router.get("/admin/viewoneplan/:id", viewoneplan);
// router.get("/admin/allplan", allplan);
// router.get("/admin/deleteplan/:id", deleteplan);

module.exports = router;
