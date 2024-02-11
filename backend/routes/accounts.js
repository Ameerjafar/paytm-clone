const express = require('express');

const router = express.Router();
const { Accounts } = require('../db');

router.post('/balance', async (req, res) => {
    const accounts = await Accounts.findOne({
        userId: req.body.userId
    })
    if(accounts) {
        res.status(200).json({balance: accounts.balance});
        console.log(accounts.balance);
    }
})
router.post('/transfer', async (req, res) => {
    const fromAccount = req.body.userId;
    const toAccount = req.body.toId;
    const amount = req.body.amount;
    const existingAccount = await Accounts.findOne({userId: fromAccount});
    const receiver = await Accounts.findOne({userId: toAccount});
    if(!existingAccount || !receiver) {
        res.status(400).send({message: 'Invalid account'});
    }
    if(existingAccount.balance < amount) {
        res.status(400).send({message: 'Insufficient balance'});
    }
    const result1 = await Accounts.findByIdAndUpdate(existingAccount._id, {$inc: {balance: -amount}});
    const result2 = await Accounts.findByIdAndUpdate(receiver._id, {$inc: {balance: +amount}});
    res.status(200).json({balance: existingAccount.balance});
})
module.exports = router;