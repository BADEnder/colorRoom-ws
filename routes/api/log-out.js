const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
    res.cookie('jwt', '')
    // req.headers['authorization'] = ''
    res.redirect('/')
    return res
})


module.exports = router