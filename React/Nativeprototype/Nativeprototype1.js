Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
}
function f () {
    alert('Hello');
}

f.defer(1000);
// หน่วงเวลา 1 วินาทีแล้วแสดง Hello
