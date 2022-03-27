function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let temp = prompt("Enter number:");
        this.value += Number(temp);
    }
}
