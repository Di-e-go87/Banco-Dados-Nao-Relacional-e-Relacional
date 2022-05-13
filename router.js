const express = require('express')
const router = express.Router()
const userRegistrationRepository=require('../infrastructure/repository/user-repository/user-registration-respository')
var controller = require("../infrastructure/database/model/user-model/user-controller");


router.get("/usuarios" , controller.get);
router.post("/usuarios" , controller.post);
router.put("/usuarios" , controller.get);


module.exports = router