let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}


function sum(obj) {
    let total = 0;
    for (let key in obj){
        total = total + obj[key];
    }
    return total;
};


sum(salaries);
//return 390
