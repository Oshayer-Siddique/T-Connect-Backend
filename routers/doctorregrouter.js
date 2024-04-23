const express = require('express')

const router = express.Router();


const{register,getdoctors} = require('../controllers/doctorregcontroller')



router.post("/tconnect/doctorregister",register);
router.get('/tconnect/listdoctors',getdoctors);



module.exports = router;