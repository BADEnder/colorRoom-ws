const express = require('express')
const path = require('path')

const router = express.Router()

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'main-list.html'))
})

module.exports = router