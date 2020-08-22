    /////  HW#11 Asynchrony, Promises  /////


let i = 0;
let time = 1000;
for (;i<4; i++, time = time+2000) {
  setTimeout (function() {
    let num = Math.random().toString();
    num = (num.substr(num.length - 5));
    console.log(num);
  }, time)
}
