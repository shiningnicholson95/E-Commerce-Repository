const express = require('express')
const router = express.Router() 
const { usersRouter } = require('../Controllers/UserController')
const { adminRouter } = require('../Controllers/Admin/AdminController')

router.use('/admin', adminRouter)
router.use('/users', usersRouter)

module.exports = {
    routes: router 
}