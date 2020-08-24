    /////  HW#11 Asynchrony, Promises  /////

let i = 0;
let charStr = '';

function getChines() {
  return new Promise(char => {
    setTimeout (() => {
      char(String.fromCharCode(Date.now().toString().slice(-5)));
    }, 50);
  })
}

async function getRandomChinese(length) {
  for (; i<length; i++) {
    charStr += await getChines();
  }
  console.log(charStr);
  document.getElementById('chars').textContent = charStr;
}

getRandomChinese(4);
