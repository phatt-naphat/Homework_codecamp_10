function draw(n){
    let num = '';
    for (let i = 1; i <= n; i++){
        for (let j = n; j > 0; j--){
            if ( j <= i){
                num += '*';
            }
            else {num += '-';
                 }
        }
        num += '\n';
    }
    console.log(num);
}
