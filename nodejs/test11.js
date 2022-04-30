//console.log('1')
//setTimeout( () => { console.log('2')}, 1000);
//console.log('3')

//from the above code it supposed to be 1 then 2 then 3;

// const pm = new Promise( rs =>
//     setTimeout( () => { 
//         console.log('2')
//         rs()
//     }, 1000))

// console.log('1')
// pm.then( () => {
//     console.log('3')
// })

// from the code above we can rearrange by this

console.log('1')
new Promise(rs =>
    setTimeout(() => {
        console.log('2')
        rs()
    }, 1000)).then(() => {
        new Promise(rs =>
            setTimeout(() => {
                console.log('3')
                rs()
            }, 1000)).then(() => {
                setTimeout(() => console.log('4'), 1000)
            })
    })