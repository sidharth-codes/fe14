const sounds =[
  "audio/1.mp3",
  "audio/2.mp3",
  "audio/3.mp3",
  "audio/4.mp3",
];
let index = 0;
const audio = new Audio();

document.getElementById("noButton").addEventListener("click", () => {
  audio.src = sounds[index];
  audio.currentTime = 0;
  audio.play();
  index = (index + 1) % sounds.length;
});

const flash = document.getElementById("flash");

  function screenFlash() {
    flash.classList.add("active");

    setTimeout(() => {
      flash.classList.remove("active");
    }, 150);
  }

  document.getElementById("yesButton").onclick = screenFlash;
  document.getElementById("noButton").onclick = screenFlash;
  // script.js

const yesBtn = document.getElementById("yesButton");
const question = document.querySelector(".question");

let clickCount = 0;

const messages = [
  "Do you know whats special on Feb 14? ❤️🌹✨",
  " Want to spend the day with me? ❤️🥰✨",
  "This is Are you reallllllllllllllylyyyyyyyyy sure? 😏❤️✨👀",
  "Will you bee myyy valentine babbyy? 🐝❤️🥰💖✨💕"
];

yesBtn.addEventListener("click", () => {
  clickCount++;

  // On every click except 5th → change question text
  if (clickCount < 5) {
    const index = (clickCount - 1) % messages.length;
    question.textContent = messages[index];
  }

  // On 5th click → go to another page
  if (clickCount === 5) {
    window.location.href = "next.html"; // change page name if needed
  }
});



document.getElementById("yesButton").addEventListener("click", () => {
  audio.src = "audio/yay.mp3";
  audio.currentTime = 0;
  audio.play();
})
