let calculator = {
  read() {
    this.number1 = Number(prompt("Enter first number"));
    this.number2 = Number(prompt("Enter second number"));
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  }
  
};

calcultor.read();
alert( calculator.sum() );
alert( calculator.mul() );
