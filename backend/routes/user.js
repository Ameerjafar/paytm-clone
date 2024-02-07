const express = require('express');

const router = express.Router();
const { signupValidation } = require('./signupValidation')
const { signinValidation } = require('./signinValidation');
router.post('/signup', signupValidation, (req, res) => {
    
})
router.post('/signin', signinValidation, (req, res) => {
})

module.exports = router; 