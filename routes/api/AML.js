const express = require('express')
const path = require('path')

const router = express.Router()

const AMLController = require('../../controllers/AMLController')


router.route('/')
    .post(AMLController.postAMLController)
