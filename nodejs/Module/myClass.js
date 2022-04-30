const mu = require('./myUtil.js')

class Human {
    constructor(name, age=mu.getRandom(20,50)) {
        this.name = name
        this.age = age
    }
    info() {console.log(this.name, this.age)}
}


module.exports.Human = Human