require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()

// Basic set up
const PORT = process.env.PORT || 3500

// Customized Middleware
const { logger } = require('./middleware/logEvent')

// Basic application from express.js
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))

// MIDDLEWARE
app.use(logger)


// WEBSITE
app.use('/', require('./routes/home'))
app.use('/match-list', require('./routes/match-list'))
app.use('/main-list', require('./routes/main-list'))
app.use('/member', require('./routes/member'))
app.use('/log-in', require('./routes/log-in'))

// API
app.use('/api/auth', require('./routes/api/auth'))

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})