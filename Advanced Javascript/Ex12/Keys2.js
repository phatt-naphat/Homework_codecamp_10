function count(users) {
    let count = 0;
    for ( obj of Object.keys(users) ) {
        count++;
    }
    return count;
}
let user = {
  name: 'John',
  age: 30
};

alert( count(user) );
