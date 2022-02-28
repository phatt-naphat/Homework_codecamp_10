function draw(n){
    let num = '';
    let side = n;
    for (let i = 0; i < n; i++){
        for (let j = 1; j <= (2 * n) - 1; j++){
            if (j == n){
                num += '*';
            }
            else if ( j <= n - side || j >= n + side){
               num += '-';
            }
            else { num += '*'; }
        }
        num += '\n';
        side--;
        console.log(side)
    }
console.log(num)    
}
