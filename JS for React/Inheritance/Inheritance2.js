//การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป 

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// object ของ rabbit
