function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // alert "Rabbit"
Rabbit.prototype.sayHi(); // alert "Undefined"
Object.getPrototypeOf(rabbit).sayHi(); // alert "Undefined"
rabbit.__proto__.sayHi(); //alert "Undefined"
