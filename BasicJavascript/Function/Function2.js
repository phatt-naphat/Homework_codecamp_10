function draw(n){
    let star = '';
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            star += '*';
        }
        star += '\n';
    }
    console.log(star);
}

