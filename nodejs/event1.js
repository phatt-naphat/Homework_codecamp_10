const EventEmitter = require('events')
const em1 = new EventEmitter()

setInterval( () => em1.emit('onesec', 'Hi all'), 1000)
setInterval( () => em1.emit('twosec'), 2000)

em1.on('onesec', (e) => {
    console.log(e)
})

em1.on('twosec', (e) => {
    console.log('From e2')
})
