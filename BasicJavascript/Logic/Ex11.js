//1.คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร


alert( null || 2 || undefined );              //2
alert( alert(1) || 2 || alert(3) );           //1 and 2
alert( 1 && null && 2 );                      //null
alert( alert(1) && alert(2) );                //1 and undefined
alert( null || 2 && 3 || 4 );                 //3


//2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60

let age = prompt("Pleae input your age");
if (age >= 18 && age <=60){
  alert("Your age is between 18-60");
}

//3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60

let age = prompt("Pleae input your age");
if (age < 18 || age > 60){
  alert("Your age isn't between 18-60");
}

//4. คำสั่ง alert ไหนที่จะถูกรันบ้าง

if (-1 || 0) alert('first')                    //first
if (-1 && 0) alert('second')                   //(nothing)
if (null || -1 && 0) alert( 'third' );         //(nothing)

//5. ให้เขียนระบบ login

let name = prompt("Please input Admin");
if (name == "Admin"){
    let password = prompt("Please enter your password");
    if (password == "codecamp#5"){
        alert ("ยินดิต้อนรับ")
    }
    else if (password == null){
        alert("ยกเลิก");
    }
    else {alert("Wrong password");}
}
else { alert ("ผมไม่รู้จักคุณ"); }


