const jwt = require('jsonwebtoken')

const usersDB = {
    users: require('../database/account.json'),
    setUsers: function (users) {
        this.users = users
    }
}

const verifyRefreshToken = (req, res, next) => {

    if (!req.cookies?.jwt) {
        return res.redirect('/log-in')
    }

    const refreshToken = req.cookies.jwt
    const foundUser = usersDB.users.find( person => person.refreshToken == refreshToken )
    if (!foundUser) {
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