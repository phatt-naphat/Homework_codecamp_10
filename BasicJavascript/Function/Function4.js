function draw(n){
    let num = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            num += i;
        }
        num += '\n';
    }
    console.log(num);
}
