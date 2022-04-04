function topSalary(salaries) {
    max = null;
    for (let name in salaries) {
        if (salaries[name] > max) {
            max = salaries[name];
        }
    }
    return max;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

