function OB () {}

let obj = new OB();
console.log(obj);
// OB{}


let obj2 = new obj.constructor();
console.log(obj2);
// OB{}
