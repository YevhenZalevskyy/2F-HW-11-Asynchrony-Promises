    /////  HW#11 Asynchrony, Promises  /////


let i = 0;
let time = 50;
let charStr = '';
for (;i<4; i++, time = time+50) {
  // setTimeout (function() {
    let num = Date.now().toString();
    num = (num.substr(num.length - 5));
    charStr = charStr + String.fromCharCode(num);
    console.log(String.fromCharCode(num));
    console.log(num);
  // }, time)
}

console.log(charStr);
