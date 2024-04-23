const express = require('express')

const router = express.Router();


const{login,profile} = require('../controllers/doctorlogincontroller')



router.post("/tconnect/doctorlogin",login);
router.get("/tconnect/doctorprofile/:userId", profile);


module.exports = router;