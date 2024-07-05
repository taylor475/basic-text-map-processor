const events = require('events')
const fs = require('fs')
const readline = require('readline')

// Function for reading each line of a file into an array
async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./index.js'),
            crlfDelay: Infinity
        })

        const lines = []
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

// Function for creating a modifiable map template of certain parameters
async function createMapTemplate(length, width, depth) {
    // Create a string which contains the initial map info and will contain the map
    let mapString = 'Dimensions: ' + length + 'x' + width + 'x' + depth + '\n' +
    'Restrictions: \n\n'

    for (let z = 0; z < depth; z++) {
        mapString += 'Layer' + z + '\n'
        for (let y = 0; y < width; y++) {
            for (let x = 0; x < length; x++) {
                mapString += '#'
            }
            mapString += '\n'
        }
        mapString += '\n'
    }

    fs.writeFile('NewMap.txt', mapString, (err) => {
        console.error(err)
    })
}
