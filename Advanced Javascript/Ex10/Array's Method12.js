let array1 = [
            { name: "apple", birth: "2000-01-01" },
            { name: "banana", birth: "1990-10-10" },
            { name: "watermelon", birth: "1985-12-30" },
            ];
let array2 = array1.map((item,index) => {
let dummy = array1[index].birth.split("-");
let yy = dummy[0];
let mm = ((new Date(array1[index].birth)).toDateString()).slice(4, 7);
let dd = dummy[2];
            
return `<tr> <td>${array1[index].name}</td> <td>${dd} ${mm} ${yy}</td> </tr>`
})
console.log(array2)
