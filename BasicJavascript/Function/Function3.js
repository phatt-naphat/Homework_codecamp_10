function draw(n){
    let num = '';
    for (let i = 0; i < n; i++){
        for (let j = 1; j <= n; j++){
            num += j;
        }
        num += '\n';
    }
    console.log(num);
}
