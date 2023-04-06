require('dotenv').config()
const jwt = require('jsonwebtoken')
const path = require('path')

const fsPromise = require('fs').promises

const verifyRefreshToken = async (req, res, next) => {

    if (!req.cookies.jwt) {
        return res.redirect('/log-in')
    }

    const refreshToken = req.cookies.jwt

    let usersDB = await fsPromise.readFile(path.join(__dirname, '..', 'database', 'accounts.json'), 'utf-8')
    usersDB = JSON.parse(usersDB)
    // console.log(usersDB)

    const foundUser = usersDB.find( person => person.refreshToken == refreshToken )
    if (!foundUser) {
        console.log('i cannot find the user')
        return res.redirect('/log-in')
    } 

    const accessToken = jwt.sign(
        {username: foundUser.username},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '30m'}
    )

    req.headers['authorization'] = `Bearer ${accessToken}`
    next()
    // res.json( {accessToken} ) 
    
}

module.exports = verifyRefreshToken