const express = require("express");
const { signUp } = require("../controller/userControler");
const router = express.Router();

// Admin || User
router.route("/create").post(signUp);

// Admin
module.exports = router;
