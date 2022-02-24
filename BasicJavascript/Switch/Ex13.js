//1. แปลง Code ดังกล่าวเป็น if-else statement

let browser = prompt("Please enter your browser");
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

// Answer
let browser = prompt("Please enter your browser");
  if (browser == "Edge") {alert( "You've got the Edge!")}
  else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){alert("Okay we support these browsers too");}
  else { alert ("We hope that this page looks ok!"); }

---------------------------------------------------------------------------------------------------------------------------------------------------

//2. 	แปลง Code ดังกล่าวเป็น Switch cases

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

//Answer

let a = +prompt('a?', '');

switch (a){
  case 0 : alert('0')
           break;
  case 1 : alert('1')
           break;
  case 2 :
  case 3 : alert( '2,3' );
           break;
}





