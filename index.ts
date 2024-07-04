const events = require('events')
const fs = require('fs')
const readline = require('readline')

// Function for reading each line of a file into an array
async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./index.ts'),
            crlfDelay: Infinity
        })

        const lines: String[] = []
        rl.on('line', (line) => {
            console.log(`Line from file: ${line}`)
            lines.push(line)
        })

        await events.once(rl, 'close')

        console.log('Reading file line by line with readline done.')
        return lines
    } catch (err) {
        console.error(err)
    }
}
