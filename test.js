// const bcrypt = require('bcrypt')


// const pwd = 'P@ssw0rd'

// const genHashedPwd = async (pwd) => {
//     const pwdHashed = await bcrypt.hash(pwd, 10)

//     console.log(pwdHashed)
// }


// genHashedPwd(pwd)


const a = [
    {
        user: "Ender",
        pwd: "123",
        age: "28"

    },
    {
        user: "Kelly",
        pwd: "456",
        age: "28"
    }
]

const test1 = a.find(person => person.age == 28)
const test2 = a.filter(person => person.age ==28)

console.log(test1)
console.log(test2)