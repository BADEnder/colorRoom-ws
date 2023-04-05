const express = require('express')
const path = require('path')

const sh = require('../../controllers/shorthistoryController')

const router = express.Router()


router.route('/')
    .get(sh.getShorthistory)
    .post(sh.postShorthistory)


module.exports = router