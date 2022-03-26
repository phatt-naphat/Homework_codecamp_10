let key = prompt("Enter key:")
let object = {};

while (key != "stop"){
    value = prompt("Enter value:");
    object[key] = value;
    key = prompt("Enter key:");
}

console.log(object);
