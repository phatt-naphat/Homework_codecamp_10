const fs = require('fs');

const data = fs.readFileSync('./readme.txt')
console.log(data.toString())
console.log('Done...')