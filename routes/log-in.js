const express = require('express')
const path = require('path')

const logInController = require('../controllers/logInController')
const router = express.Router()

router.route('/')
    .get(logInController.getLogInController)
    .post(logInController.postLogInController)



module.exports = router