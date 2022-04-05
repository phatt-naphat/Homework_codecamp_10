let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

//----------------------------------------------------------------------------------------------------------------------------------------------------

let hamster = {

  eat(food) {
      if (!this.stomach) this.stomach = [];
      this.stomach.push(food);
  }
};


let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
alert( speedy.stomach ); // apple

alert( lazy.stomach ); // undefined
