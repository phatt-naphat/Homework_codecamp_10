function draw(n){
    let num = '';
    let buffer = 1;
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            num += buffer;
            buffer++;
        }
        num += '\n';
    }
    console.log(num);
}
