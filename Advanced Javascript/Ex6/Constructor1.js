function Calculator() {
            this.read = function() {
                this.number1 = Number(prompt("Enter first number: "))
                this.number2 = Number(prompt("Enter second number: "))
            }
            this.sum = function() {
                return this.number1 + this.number2
            }
            this.mul = function() {
                return this.number1 * this.number2
            }
        }
        let calculator = new Calculator();
undefined
