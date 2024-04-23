const express = require('express')

const router = express.Router();


const{login,profile,searchpatient,requestpatient} = require('../controllers/patientlogincontroller')



router.post("/tconnect/patientlogin",login);
router.get("/tconnect/patientprofile/:userId", profile);
router.post("/tconnect/patientsearch",searchpatient);
router.post("/tconnect/requestpatient",requestpatient);


module.exports = router;