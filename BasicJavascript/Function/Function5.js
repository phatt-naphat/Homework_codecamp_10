function draw(n){
    let num = '';
    for (let i = n; i > 0; i--){
        for (let j = 1; j <= n; j++){
            num += i;
        }
        num += '\n';
    }
    console.log(num);
}
