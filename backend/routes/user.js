const express = require('express');
const { User } = require('../db');
const router = express.Router();
const { signupValidation } = require('./signupValidation')
const { signinValidation } = require('./signinValidation');
router.post('/signup', signupValidation, (req, res) => {
    
})
router.post('/signin', signinValidation, (req, res) => {
})
router.get('/users', async (req, res) => {
    const allUsers = await User.find();
    res.status(200).json({allUsers: allUsers});
})
module.exports = router; 