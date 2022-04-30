const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf8'
    })

    if (req.url === '/') {
        res.write('<h2>This is Home page</h2>')
        for (let i = 1; i < 7; i++)
            res.write(`<h${i}>ยินดีต้อนรับครั้งที่ ${i}</h${i}>`)
        return res.end()
    }

    if (req.url === '/user') {
        res.write('<h2>This is User page</h2>')
        return res.end()
    }

    if (req.url === '/page1') {
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
            <body style = "background-color: lightblue;">
                <h1>Hello World!</h1>
                <p>This page has a light blue background color!</p>
            </body>
            </html>
    `)
        return res.end()
    }

    function form(req, res) {
        res.write(`
        <!DOCTYPE html>
        <html>
        <body>
    
        <h2>Text input fields</h2>
    
        <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
        </form>
    
        <p>Note that the form itself is not visible.</p>
    
        <p>Also note that the default width of text input fields is 20 characters.</p>
    
        </body>
        </html>
        `)
        res.end()
    }

    if (req.url === '/form') {
        return form(req, res)
    }

    res.writeHead(404, 'Not Found in our site...', {
        'content-type': 'text/html'
    })
    res.end('<hr><h3>Not found</h3></hr>')

}).listen(8080, () => console.log('Server start..'))
