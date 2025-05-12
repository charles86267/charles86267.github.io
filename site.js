
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


// Carousel
const urls = [
     'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
let currentImage = 0;

const showImages = () => {
    const offset = currentImage % urls.length;
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length;
        image.src = urls[imageIndex];
    });
};

showImages();

setInterval(() => {
    currentImage++;
    showImages();
}, 5000);

document.getElementById('prev').addEventListener('click', () => {
    currentImage--;
    showImages();
});


document.getElementById('next').addEventListener('click', () => {
    currentImage++;
    showImages();
});
