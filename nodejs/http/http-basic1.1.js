const http = require('http')

function app(req, res) {
    console.log('request comming...')
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write('Hello, world')
    res.end()
}

http.createServer(app).listen(8080)