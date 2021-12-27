var express = require('express');
var router = express.Router();

router.use('/signup',require('./userSignupPOST'));
router.use('/login',require('./userLoginPOST'));
router.use('/profile/:id',require('./userProfileGET'));

module.exports=router;