const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const audio = document.getElementById("tick");

function mute(){
    audio.muted = true;
}
function unmute(){
    audio.muted = false;
}
mute();


function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = second * 6 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  if (!audio.hasAttribute("muted")) {
    audio.currentTime = 0;
    audio.play();
  }

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

document.getElementById("green").onclick = function () {
  document.getElementById("theme-css").href = "./style/default.css";
};
document.getElementById("red").onclick = function () {
  document.getElementById("theme-css").href = "./style/red.css";
};
document.getElementById("blue").onclick = function () {
  document.getElementById("theme-css").href = "./style/blue.css";
};
document.getElementById("bw").onclick = function () {
  document.getElementById("theme-css").href = "./style/bw.css";
};

// Mute Status
const muteIcon = document.getElementById("mute");

muteIcon.onclick = function () {
  if (muteIcon.classList.contains("fa-volume-mute")) {
    muteIcon.classList.remove("fa-volume-mute");
    muteIcon.classList.add("fa-volume-up");
    unmute();
  } else {
    muteIcon.classList.add("fa-volume-mute");
    muteIcon.classList.remove("fa-volume-up");
    mute();
  }
};
