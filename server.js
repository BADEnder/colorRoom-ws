require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3500

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))


app.use('/', require('./routes/home'))
app.use('/match-list', require('./routes/match-list'))
app.use('/main-list', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main-list.html'))
})
app.use('/member', require('./routes/member'))

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})