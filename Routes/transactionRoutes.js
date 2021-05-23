const express = require("express");
const router = express.Router();
const {v4: uuidv4} = require("uuid")
const endpoints = require('../Endpoints/endpoints')
const constants = require("../Utilities/constants")
const contants = require('../Utilities/constants')
const users = []
const transactions = []


router.post(endpoints.addUser, (req,res) => {
    const user = users.filter(user => user.name === req.body.username)[0]
    if(user){
        res.status(constants.userExists.status).send(constants.userExists.message);
    } else if(!user){
        let obj = {}
        obj.username = req.body.username,
        obj.id = uuidv4()
        if(req.body.amount && req.body.amount > 0)
            obj.amount = req.body.amount

        if(!req.body.amount)
            obj.amount = 0

        users.push(obj)
        res.status(200).send({user: users[0]})
    }   
})

router.put(endpoints.debit, (req,res) => {
    const user = users.filter(user => user.id === req.body.accountNumber)[0]
    const transaction = req.body
    if(user){
        if(user.amount > 0){
            let obj = {
                userid: user.id,
                type: "Debit",
                amount: transaction.amount,
                balance: user.amount,
                id: uuidv4()
            }
            transactions.push(obj)
            user.amount = user.amount - req.body.amount
            res.status(constants.transaction.successful.status).send(constants.transaction.successful.message)
        }
        if(user.amount <= 0)
            res.status(constants.transaction.insufficientFunds.status).send(constants.transaction.insufficientFunds.message)
        
        let obj = {}
        obj.type = req.body.type
        obj.amount = req.body.amount

    } else if(!user) {
        res.status(contants.serviceNotAvailable.status).send(contants.serviceNotAvailable.message)
    }
})

router.put(endpoints.credit, (req,res) => {
    const user = users.filter(user => user.id === req.body.accountNumber)[0]
    const transaction = req.body
    if(user){
        if(user.amount > 0){
            let obj = {
                userid: user.id,
                type: "Credit",
                amount: transaction.amount,
                balance: user.amount,
                id: uuidv4()
            }
            transactions.push(obj)
            user.amount = user.amount + req.body.amount
            res.status(constants.transaction.successful.status).send(constants.transaction.successful.message)
        }
        if(user.amount <= 0)
            res.status(contants.transaction.insufficientFunds.status).send(constants.transaction.insufficientFunds.message)
    
        let obj = {}
        obj.type = req.body.type
        obj.amount = req.body.amount

    } else if(!user) {
        res.status(contants.serviceNotAvailable.status).send(contants.serviceNotAvailable.message)
    }
})

router.get(endpoints.transaction, (req,res) => {
    const user = users.filter(user => user.id === req.params.id)[0]
    if(user){
        const userTransactions = transactions.filter(transaction => transaction.userid === user.id)
        if(userTransactions){
            res.status(201).send({transactionDetails: userTransactions})
        } else if(!userTransactions){
            res.status(constants.transaction.noTransactions.status).send(constants.transaction.noTransactions.message)
        }
    } else if(!user) {
        res.status(constants.userExists.status).send(constants.userExists.message)
    }
})

router.get(endpoints.accountDetails, (req,res) => {
    const user = users.filter(user => user.id === req.params.id)[0]
    if(user)
        res.status(200).send({accountDetails: user})
})

module.exports = router