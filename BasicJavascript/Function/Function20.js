function draw(n){
    let num = '';
    let buffer = 1;
    for (let i = 1; i < n; i++){
        for (let j = n; j > 0; j--){
            if ( i < j ){
                num += '-';
            }
            else {num += buffer;
                  buffer++;
                 }
        }
        num += '\n';
    }
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if ( i > j){
                num += '-';
            }
            else {num += buffer;
                  buffer++;
                 }
        }
        num += '\n';
    }
    console.log(num);
}
