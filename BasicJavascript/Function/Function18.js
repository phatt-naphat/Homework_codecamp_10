function draw(n){
    let num = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            if ( i > j){
                num += '-';
            }
            else {num += '*';
                 }
        }
        num += '\n';
    }
    console.log(num);
}
