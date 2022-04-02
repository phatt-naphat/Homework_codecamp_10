let array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" }
  ]

let array2 = array1.map(x => x.name + " " + x.surname);
console.log(array2)
