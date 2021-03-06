//1. เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร

let i = 3;
while (i) {
  alert( i-- );
}                   

// ลำดับสุดท้ายคือ 1


//2. code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
let i = 0;
while (++i < 5) alert( i );
//แสดงค่าตั้งแต่ 1 - 4 

let i = 0;
while (i++ < 5) alert( i );
//แสดงค่าตั้งแต่ 1 - 5
//คำตอบคือไม่เหมือนกัน


//3. code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
for (let i = 0; i < 5; i++) alert( i );
//แสดงค่าตั้งแต่ 0 - 4
for (let i = 0; i < 5; ++i) alert( i );
//แสดงค่าตั้งแต่ 0 - 4
//alert ออกมาเหมือนกัน


//4. ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา

for (let i = 2; i < 11; i++) alert(i);
// หรือ
let i = 1;
while (i++ < 10) alert(i);


//5. เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}


//6. ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย

let i = prompt("Please enter the number between 1 - 100");
if(i >= 1 && i <= 100){
    while (true) {
    let j = prompt("Please enter the second number in range of 1 - 100");
    if(j === i) { alert("Correct"); break;} 
    else if (j > i) {alert("It's more than the first number");}
    else if (j < i) {alert("It's less than the first number");}
    else {alert("Please enter the number in range of 1 - 100")}
    }
}
else { alert("Please try again later"); }


