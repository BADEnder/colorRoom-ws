// const pg = require('pg')

// require('dotenv')
const {Client} = require('pg')

const config = {
    username: 'Ender',
    password: 'tiger1989',
    host: '127.0.0.1',
    post: 5432
}

const main = async() => {
    const client = new Client(config)
    await client.connect()
    // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    // console.log(res.rows[0].message)
    await client.end()
}


main()

// const connection = pg.connection