const events = require('events')
const fs = require('fs')
const readline = require('readline')

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./index.ts'),
            crlfDelay: Infinity
        })

    rl.on('line', (line) => {
        console.log(`Line from file: ${line}`)
    })

    await events.once(rl, 'close')

    console.log('Reading file line by line with readline done.')
    } catch (err) {
        console.error(err)
    }
}
