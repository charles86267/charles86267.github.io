
const firstP = document.querySelector('p')
console.log(firstP)
// firstP.textContent = "Hello"

const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'


const contactA = document.querySelector('#contact');
contactA.style.backgroundColor = '#3388FF';

// const active = document.querySelector('section .active')
// console.log(active)
// active.computedStyleMap.textDecoration = 'underlien'

// document.body.style.backgroundColor = 'red'
document.title = 'Charles webpage'

document.addEventListener('click', (e) => {
  const section = e.target.closest('section');
  if (section) {
    section.style.border = '2px solid red';
  }
});


//Dynamic Welcome

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

let message = "";

if (isMorning) {
  message = "Good morning! Hope you have a great day ahead.";
} else if (isAfternoon) {
  message = "Good afternoon! Keep up the good work.";
} else if (isEvening) {
  message = "Good evening! Time to relax and unwind.";
}

const welcomeDiv = document.getElementById("welcome");
if (welcomeDiv) {
  welcomeDiv.textContent = message;
}

// Secret Message

localStorage.setItem("It's a secret to everybody.", "I am Groot!");
