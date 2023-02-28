const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = fs.promises

const path = require('path')

const logEvent = async(msg, fileName) => {
    const dateTime = format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`

    try {
        if ( !fs.existsSync(path.join(__dirname, '..', 'logs')) ) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), logItem)

    } catch (err) {
        console.log(err)
    }
 
}


const logger = (req, res, next) => {
    const msg = `${req.method}\t${req.headers.origin}\t${req.url}`
    logEvent(msg, 'reqLog.txt')

    next()
}

module.exports = {logEvent, logger}

