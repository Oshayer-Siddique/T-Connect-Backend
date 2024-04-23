const express = require('express')

const router = express.Router();


const{register,login,profile} = require('../controllers/admincontroller')



router.post("/tconnect/adminreg",register);
router.post("/tconnect/adminlogin",login);
router.get("/tconnect/adminprofile/:userId",profile);



module.exports = router;