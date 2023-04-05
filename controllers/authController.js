const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const fsPromise = require('fs').promises

const usersDB = {
    users: require('../database/account.json'),
    setUsers: function (users) {
        this.users = users
    }
}

const getAuth = () => {
    return null
}

const postAuth = async (req, res) => {

    const user = req.body.user
    const pwd = req.body.pwd
    if (!user || !pwd) {
        return res.status(400).json({
            msg: "帳號與密碼必須輸入"
        })
    }

    const foundUser = usersDB.users.find(person => person.username === user)
    if (!foundUser) return res.status(401).json({
        msg: "無此使用者"
    })

    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        // create JWT
        const accessToken = jwt.sign(
            { username: foundUser.username },
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: '30m' }
        )
        const refreshToken = jwt.sign(
            { username: foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        const otherUser = usersDB.users.filter( person => person.username !== foundUser.username)
        const currentUSer = {...foundUser, refreshToken}
        usersDB.setUsers([...otherUser, currentUSer])

        await fsPromise.writeFile(
            path.join(__dirname, '..', 'database', 'account.json'),
            JSON.stringify(usersDB.users)
        )
        
        res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 3600* 1000})
        res.status(200).json({
            msg: "登錄成功",
            accessToken
        })

    } else {
        res.status(401).json( {
            msg: "密碼錯誤"
        })
    }

}

module.exports = {
    getAuth,
    postAuth
}