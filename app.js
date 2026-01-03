const button = document.getElementById("clickBtn");
const countSpan = document.getElementById("count");
const message = document.getElementById("message");

let count = 0;

const messages = [
  "Nice 😎",
  "Keep going 🔥",
  "You're on a roll 🚀",
  "Okay, that's impressive 👀",
  "BRO STOP 💀",
  "Alright you win 🏆"
];

button.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;

  message.textContent = messages[Math.min(
    Math.floor(count / 3),
    messages.length - 1
  )];

  // random background color
  document.body.style.background =
    `linear-gradient(135deg, hsl(${Math.random()*360},70%,60%), hsl(${Math.random()*360},70%,40%))`;
});
