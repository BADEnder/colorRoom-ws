const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log('hello here')
    console.log("req body is",req.body)
    console.log("req body type is", typeof req.body)
    console.log(Object.keys(req.body))

    console.log('\n\n\n')
    console.log(req.headers)
    // console.log(req)
    res.json({
        status_code: 200,
        msg: "success"
    })
})


module.exports = router