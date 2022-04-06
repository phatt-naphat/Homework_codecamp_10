function work(a, b) {
    console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
}

function spy (func) {
    wrapper.calls = []
    function wrapper (...arr) {
        wrapper.calls.push(arr)
        func.apply(this,arr)
    }
    return wrapper
}

work = spy(work);
  work(1, 2); // 3
  work(4, 5); // 9
  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }
