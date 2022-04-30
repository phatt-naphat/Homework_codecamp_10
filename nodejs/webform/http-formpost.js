const http = require('http')
const fs = require('fs')

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req, res) => {
    let body = "";
    req.on('data', (chunk) => {
        body += chunk;
    })
    req.on('end', () => {
        body = decodeURI(body)
        console.log('Body:' + body)
        res.writeHead(200)
        res.write('<p>' +body+'</p><hr>')
        res.end(postHTML)
    })
}).listen(8080, ()=> console.log('Server start...'))