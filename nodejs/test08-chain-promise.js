const fs = require('fs')

const getFile = (filename) => {
    return new Promise ((resolve, reject) =>{
        fs.readFile(filename, (err,data) => resolve(data) )
    })
}

getFile('./start.txt')
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)
    })
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)
    })
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)
    })
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)
    })
    .catch(err => {
        console.log('Error: ' +err)
    })