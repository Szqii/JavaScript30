const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = second * 6 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minDegrees = minute * 6 + second / 10 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = hour * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

// Theme Change

document.getElementById('green').onclick = function () { 
    document.getElementById('theme-css').href = './style/default.css';
};
document.getElementById('red').onclick = function () { 
    document.getElementById('theme-css').href = './style/red.css';
};
document.getElementById('blue').onclick = function () { 
    document.getElementById('theme-css').href = './style/blue.css';
};
document.getElementById('bw').onclick = function () { 
    document.getElementById('theme-css').href = './style/bw.css';
};