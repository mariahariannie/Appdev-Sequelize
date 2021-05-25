const express = require("express");
const router = express.Router();
const accountcontroller = require ("../controllers/accountcontroller");

router.get("/login", accountcontroller.getslogin);
router.get("/logout", accountcontroller.getslogout);
router.get("/signup", accountcontroller.getsignup);
router.post("/signingUp", accountcontroller.signup);
router.post("/loggingIn", accountcontroller.login);


/*=============== LOGIN ADMIN =============*/
module.exports = router;