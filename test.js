// const bcrypt = require('bcrypt')


// const pwd = 'P@ssw0rd'

// const genHashedPwd = async (pwd) => {
//     const pwdHashed = await bcrypt.hash(pwd, 10)

//     console.log(pwdHashed)
// }


// genHashedPwd(pwd)


const test = async () => {
    let b = require('./database/test.json')


    console.log(b)
    
    
    // b = 0
    
    // console.log(b)
    
    const fsPromise = require('fs').promises
    
    let data = await fsPromise.readFile('./database/test.json', 'utf-8')

    data = JSON.parse(data) 

    data[0]['age'] = 34

    await fsPromise.writeFile('./database/test.json', JSON.stringify(data))
    console.log(data)
    
    delete b
    b= require('./database/test.json')
    console.log(b)
}


test()