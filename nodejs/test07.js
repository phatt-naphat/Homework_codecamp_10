function dropBall(before, after) {
    before();
    console.log('catch ball')
    console.log('release')
    after();
}

function kickBall() {
    console.log('Kick ball')
}

function buyBall() {
    console.log('Buy ball')
}

//dropBall (buyBall, kickBall);
dropBall (kickBall, buyBall)