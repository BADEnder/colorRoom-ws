const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log("req body is\n",req.body)
    console.log("req body type is\n", typeof req.body)
    console.log("req body keys is\n", Object.keys(req.body))

    console.log("req headers is\n", req.headers)
    // console.log(req)
    res.json({
        status_code: 200,
        msg: "success"
    })
})


module.exports = router