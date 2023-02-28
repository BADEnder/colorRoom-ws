
const path = require('path')

const getLogInController = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'log-in.html'))
}


const postLogInController = (req, res) => {
    return null
}


module.exports = {
    getLogInController,
    postLogInController
}