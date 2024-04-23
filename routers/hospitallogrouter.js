const express = require('express')

const router = express.Router();


const{login,profile,getdoctors} = require('../controllers/hospitallogincontroller')



router.post("/tconnect/hospitallogin",login);
router.get("/tconnect/hospitalprofile/:userId", profile);



module.exports = router;