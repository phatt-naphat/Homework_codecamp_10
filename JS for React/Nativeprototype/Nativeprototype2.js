Function.prototype.defer = function(ms) {
    let f = this;
    return function(a, b){
        setTimeout(() => f(a,b),ms)
    }
}
function f(a, b){
    alert (a + b);
}

f.defer(1000)(5,3) // alert 8 ที่เวลา 1 วินาที
