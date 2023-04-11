require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const fsPromise = require('fs').promises

const JDB = {
    users: []
}

const getAuth = () => {
    return null
}

const postAuth = async (req, res) => {


    try {
        const user = req.body.user
        const pwd = req.body.pwd
        if (!user || !pwd) {
            return res.status(400).json({
                msg: "帳號與密碼必須輸入"
            })
        }
    
        console.log("here is ok")
        console.log("here is ok2")
        JDB.users = await fsPromise.readFile(path.join(__dirname, '..', 'database', 'accounts.json'), 'utf-8')
        console.log("here is ok2")
        JDB.users = JSON.parse(JDB.users)
        console.log(JDB.users)
        console.log(typeof JDB.users)

        const foundUser = JDB.users.find(person => person.username === user)
        if (!foundUser) return res.status(401).json({
            msg: "無此使用者"
        })
    
        console.log("here is ok3")

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
    

            const otherUser = JDB.users.filter( person => person.username !== foundUser.username)
            const currentUser = {...foundUser, refreshToken}
            JDB.users = [...otherUser, currentUser]
            // JDB.setUsers([...otherUser, currentUser])
    
            await fsPromise.writeFile(
                path.join(__dirname, '..', 'database', 'accounts.json'),
                JSON.stringify(JDB.users)
            )
            
            res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 3600* 1000})
            res.status(200).json({
                msg: "登錄成功",
                accessToken
            })
    
        } else {
            res.status(403).json( {
                msg: "密碼錯誤"
            })
        }
    
    } catch (err) {
        return res.sendStatus(500)
    }
    
}

module.exports = {
    getAuth,
    postAuth
}