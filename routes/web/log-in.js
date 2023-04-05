const express = require('express')
const path = require('path')

const router = express.Router()

router.get('^/$|index(.html)?', (req, res) => {
    if (req.cookies.jwt) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(__dirname, '..', '..', 'views', 'log-in.html'))
    }
})

module.exports = router
