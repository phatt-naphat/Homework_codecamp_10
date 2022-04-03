function sumSalaries(obj) {
    let sum = 0;
    for ( let i in salaries ){
        sum = sum + salaries[i];
    }
    return `Sum of salaries = ${sum}`
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); 
