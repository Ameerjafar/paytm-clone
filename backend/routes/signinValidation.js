const jwt = require('jsonwebtoken');
const  { User } = require('../db');
const { JWT_SECRET } = require('../config');
const signinValidation = async (req, res, next) => {
    const validation = {
        username: req.body.username,
        password: req.body.password
    }
    const success = await User.findOne(validation);
    if(success) {
        const token = jwt.sign({userId: success._id}, JWT_SECRET);
        res.status(200).json({message: token});
        console.log(token); 
    }
    else {
        res.status(401).json({message: 'Error while logging in'});
    }
}

module.exports = {
    signinValidation
 }
