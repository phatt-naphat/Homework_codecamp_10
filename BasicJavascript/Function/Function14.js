function draw(n){
    let num = '';
    for (let i = 0; i < n; i++){
        for (let j = n; j > 0; j--){
            if ( i < j){
                num += '*';
            }
            else {num += '-';
                 }
        }
        num += '\n';
    }
    console.log(num);
}
