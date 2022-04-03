function sumSalaries(obj) {
    let sum = 0;
    for ( value of Object.values(obj) ){
        sum += value;
    }
    return `Sum of salaries = ${sum}`
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); 
