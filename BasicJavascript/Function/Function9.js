function draw(n){
    let num = '';
    let buffer = 2;
    for (let i = 0; i < n; i++){
        num += buffer;
        num += '\n';
        buffer = buffer+2;
        }
    console.log(num);
}
