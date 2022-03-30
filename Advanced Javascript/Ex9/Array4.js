let sum = 0;
while (true) {
    let value = +prompt("Enter value:");
    if (!value) break;
    sum += value;
}
alert( sum );
