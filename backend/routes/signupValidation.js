const zod = require('zod');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const secret = require('../config');
const { Accounts } = require('../db');
const validation = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)

})
const signupValidation = async (req, res, next) => {
    const object = {
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    const userDetails = validation.safeParse(object);
    if(userDetails.error) {
        res.status(403).json({message: 'user credentials are not satisfying the condition'})
    }
    else { 
        const username = req.body.username;
        const existingUser = await User.findOne({username});
        if(existingUser) {
            res.status(411).json({message: 'Email already taken/Incorrect Inputs'});
        }
        const user = await User.create(object);
        const storeAccounts = await Accounts.create({
            userId: user._id,
            balance: 1 + Math.random() * 10000
        })
        res.status(200).send({
            firsName: firstName,
            secondName: secondName
        });
    }
}

module.exports = {
    signupValidation
}