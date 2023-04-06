require('dotenv').config()
const {Client} = require('pg')

const config = {
    user:  process.env.DB_USER || 'postgres',
    password: process.env.DB_PWD || 'tiger1989',
    host: process.env.DB_HOST || '127.0.0.1',
    post: 5432,
    database: process.env.DB_DB || 'postgres'
}

console.log(config)

const main = async(query) => {
    const client = new Client(config)
    await client.connect()
    // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    const res = await client.query(query)
    // console.log(res.rows[0].message)
    await client.end()
}


module.exports = main
