function sumInput() {
  while (typeof(value) == 'number') {
    let value = prompt("Enter numerical value:");
    let sum += value;
  }
  console.log(sum);
}
