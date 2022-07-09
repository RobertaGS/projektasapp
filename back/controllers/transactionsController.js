const Transaction = require('../models/Transaction');
const asyncHandler = require('express-async-Handler');
//@desc Get transactions
//@route GET /api/transactions
//@acces PRIVATE
const getTransactions = asyncHandler(async (req, res) => {
    const transactions = await Transaction.find({User: '62c3d7b76b6adfd4956bd756'});
    res.status(200).json(transactions);
});
//@desc Set transactions
//@route POST /api/transactions
//@acces PRIVATE
const setTransactions = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
    }
    
    const Transaction = await Transaction.create({
        text: req.body.text,
        amount: req.body.amount,
        user: req.body.user
    })
    res.status(200).json(Transaction);
});


module.exports = {getTransactions, setTransactions}