const express = require('express')

const router = express.Router();


const{register} = require('../controllers/patientregcontroller')



router.post("/tconnect/patientregister",register);


module.exports = router;