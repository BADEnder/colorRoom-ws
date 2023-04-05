
const {Client} = require('pg')

const config = {
    username:  process.env.DB_USER || 'root',
    password: process.env.DB_PWD || '',
    host: process.env.DB_HOST || '127.0.0.1',
    post: 5432
}

const main = async(query) => {
    const client = new Client(config)
    await client.connect()
    // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    const res = await client.query(query)
    console.log(res.rows[0].message)
    await client.end()
}


module.exports = main
