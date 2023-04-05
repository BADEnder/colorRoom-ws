require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

// Basic set up
const PORT = process.env.PORT || 80

// Customized Middleware
const { logger } = require('./middleware/logEvent')
const verifyRefreshToken = require('./middleware/verifyRefreshToken')
const verifyJWT = require('./middleware/verifyJWT')


// const verifyLogIn = require('./middleware/verifyLogIn')

// Basic application from express.js,
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
app.use('/', express.static(path.join(__dirname, 'public')))

// MIDDLEWARE - record
app.use(logger)
app.use('/log-in', require('./routes/web/log-in'))
app.use('/api/auth', require('./routes/api/auth'))

// MIDDLEWARE - secure
app.use(verifyRefreshToken)
app.use(verifyJWT)


// WEBSITE
app.use('/', require('./routes/web/home'))
app.use('/match-list', require('./routes/web/match-list'))
app.use('/main-list', require('./routes/web/main-list'))
app.use('/member', require('./routes/web/member'))

// API
app.use('/api/postData', require('./routes/api/postData'))
app.use('/api/log-out', require('./routes/api/log-out'))
// app.use('/api/search-history', require('./routes/search-histroy'))


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})