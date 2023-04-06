const express = require('express')
const path = require('path')
const fsPromise = require('fs').promises


const router = express.Router()

router.get('/', async (req, res) => {

    const refreshToken = req.cookies.jwt

    if (refreshToken) {

        let usersDB = await fsPromise.readFile(path.join(__dirname, '..', '..', 'database', 'accounts.json'), 'utf-8')
        usersDB = JSON.parse(usersDB)

        let currentUser = usersDB.find( person => person.refreshToken === refreshToken )
        let otherUser = usersDB.filter( person => person.refreshToken !== refreshToken)

        console.log(currentUser)
        console.log(otherUser)
        delete currentUser.refreshToken

        let result = [...otherUser, currentUser]

        await fsPromise.writeFile(path.join(__dirname, '..', '..', 'database', 'accounts.json'), JSON.stringify(result))

    }

    res.clearCookie('jwt', {httpOnly: true})
    res.redirect('/')
    return res
})


module.exports = router