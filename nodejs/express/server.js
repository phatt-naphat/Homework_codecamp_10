const express =  require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello form express")
})

app.get('/user', (req, res) => {
    res.send("User page form express")
})

app.listen(3000, () => console.log('Express server start...(3000)'))

//-------------------------------------------------------------------------//

const http = require('http')
const server = http.createServer()


server.on('request', (req, res) => {
    if(req.url === '/')
        res.end("Hello form HTTP Node JS")
    if(req.url === '/user')
        res.end("Hello this is user page")
})
server.listen(8080, ()=> console.log('HTTP Server start...(8080) '))