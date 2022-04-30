const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {

    let {httpVersion, method, url} = req
    console.log(httpVersion)
    console.log(method)
    console.log(url)
    // console.log(req.headers.host)
    // console.log(req.method)
    // console.log(req.url)
})

server.listen(8080)