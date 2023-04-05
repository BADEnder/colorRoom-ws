const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization']
    req.headers['authorization']
    if (!authHeader) {
        return res.sendStatus(401)
    }

    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, data) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.user = data.username
            next()
        }
    )

}

module.exports = verifyJWT

module.exports = verifyJWT