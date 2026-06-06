// 7️⃣ Cuenta regresiva ⏳

const countdownNumbers = ['5', '4', '3', '2', '1', '🚀 Despegue!']
const counter = countdownNumbers.length;

let x;

const countdown = setInterval (() => {
  countdownNumbers.forEach(num => {
    x = num;
    console.log(x);
  });
}, 1000);

setTimeout( () => {
  clearInterval(countdown);
}, 6000);


