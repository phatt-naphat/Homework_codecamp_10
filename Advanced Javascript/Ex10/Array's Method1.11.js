let array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-01" },
       { name: "watermelon", birth: "1985-12-01" },
     ]
     array2 [
       { name: "apple", birth: "2000-01-01", age: 19 },
       { name: "banana", birth: "1990-10-01", age: 29 },
       { name: "watermelon", birth: "1985-12-01", age: 33 },
     ]


let array2 = array1.map( function(item) {
    let birthdate = item.birth.split("-");
    let obj = {};
    obj.name = item.name;
    obj.birth = item.birth;
    obj.age = 2019 - birthdate[0];
    return obj;
})

console.log(array2);
