const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/usercontrollers");
router.get("/users", usercontrollers.getusers);
router.post("/add", usercontrollers.postusers);
router.put("/update:id", usercontrollers.updateuser);
module.exports = router;