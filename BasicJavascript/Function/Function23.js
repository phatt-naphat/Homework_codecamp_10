function draw(n){
    let num = '';
    let side_up = 0;
    for (let i = 1; i < n; i++){
        for (let j = 1; j <= (2 * n) - 1; j++){
            if (j == n){
                num += '*';
            }
            else if ( j >= n - side_up && j <= n + side_up){
               num += '*';
            }
            else { num += '-'; }
        }
        num += '\n';
        side_up++;
    }
    
    let side_down = n;
    for (let i = 0; i < n; i++){
        for (let j = 1; j <= (2 * n) - 1; j++){
            if (j == n){
                num += '*';
            }
            else if ( j <= n - side_down || j >= n + side_down){
               num += '-';
            }
            else { num += '*'; }
        }
        num += '\n';
        side_down--;
    }
console.log(num)    
}
