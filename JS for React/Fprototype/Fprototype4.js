function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats);// true เนื่องจาก rabbit ไม่มี eat อยู่แล้ว rabbit นำ eat มาจาก prototype

