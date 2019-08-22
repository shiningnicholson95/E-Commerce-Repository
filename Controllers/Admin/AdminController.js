const express = require('express')
const _ = require('lodash')
const router = express.Router() 
const { User } = require('../../models/User')
const { authenticateUser } = require('../../middlewares/authentication')
const { authorizeUser } = require('../../middlewares/authorization') 
router.get('/contacts', authenticateUser, authorizeUser, function(req, res){
    Contact.find()
        .then(function(contacts){
            res.send(contacts)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.put('/users/:id', authenticateUser, authorizeUser, function(req, res){   
    const id = req.params.id 
    const body = _.pick(req.body, ['allowAccess', 'username'])
    User.findOneAndUpdate({ _id: id }, body, { new: true })
        .then(function(user){
            res.send(user) 
        })
        .catch(function(err) {
            res.send(err) 
        })
})

module.exports = {
    adminRouter: router
}