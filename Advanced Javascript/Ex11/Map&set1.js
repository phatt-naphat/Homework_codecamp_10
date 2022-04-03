function unique(arr) {
    let set = new Set(arr);  // Convert to be set
    return set = Array.from(set);   // Convert back to be array then return
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

alert( unique(values) ); // Hare, Krishna, :-O
