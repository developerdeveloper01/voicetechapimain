const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/admintoken")

const {
  addrole,
  editrole,
  viewonerole,
  allrole,
  deleterole,
  lowerrolesthanmine
} = require("../controllers/role");

//Paths
router.post("/admin/addrole", addrole);
router.post("/admin/editrole/:id", editrole);
router.get("/admin/viewonerole/:id", viewonerole);
router.get("/admin/allrole", allrole);
router.get("/admin/deleterole/:id", deleterole);

//Additionalfunctionality
router.get("/admin/lowerrolesthanmine",verifyToken,lowerrolesthanmine);


module.exports = router;
