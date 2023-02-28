const bcrypt = require('bcrypt')


const pwd = 'P@ssw0rd'

const genHashedPwd = async (pwd) => {
    const pwdHashed = await bcrypt.hash(pwd, 10)

    console.log(pwdHashed)
}


genHashedPwd(pwd)