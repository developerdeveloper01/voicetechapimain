const express = require("express");
const router = express.Router();

const {
  addbilling,
  editbilling,
  viewonebilling,
  allbilling,
  allmybilling,
  deletebilling
} = require("../controllers/billing");

//Paths
router.post("/user/addbilling", addbilling);
router.post("/user/editbilling/:id", editbilling);
router.get("/user/viewonebilling/:id", viewonebilling);
router.get("/user/allbilling", allbilling);
router.get("/user/allmybilling/:id", allmybilling);
router.get("/user/deletebilling/:id", deletebilling);

module.exports = router;
