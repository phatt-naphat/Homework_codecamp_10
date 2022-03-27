let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() {
    alert( this.step );
  }
};

ladder.up().up().down().showStep();
//Error since there is no return in each functions.

//To fix it jest add return in every single functions

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; //meaning that it returns ladder
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();
// 1
