const http = require('http')

http.createServer((req, res) => {
    console.log('request comming...')
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write('Hello, world')
    res.end()
}).listen(8080)