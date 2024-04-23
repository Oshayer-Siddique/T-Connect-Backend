const express = require('express')

const router = express.Router();


const{register} = require('../controllers/hospitalregcontroller')



router.post("/tconnect/hospitalregister",register);


module.exports = router;