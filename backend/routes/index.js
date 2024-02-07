const express = require('express');

const router = express.Router();

const user = require('./user');

const  accountReader = require('./accouts');

router.use('/user', user);
router.use('/account', accountReader);  
module.exports = router