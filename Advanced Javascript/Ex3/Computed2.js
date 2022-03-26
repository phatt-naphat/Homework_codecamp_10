let key = prompt("Enter key:")
let object = {};

while (key != "stop"){
    value = prompt("Enter value:");
    if (value > 1) {
        key = key + "s";
    }
    object[key] = value;
    key = prompt("Enter key:");
}

console.log(object);
