
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

// To do list

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const todoList = document.querySelector('.todo-list')
const input = document.getElementById('new-todo')
const button = document.getElementById('add-button')

button.addEventListener('click', () => {
  if (input.value.trim() === '') return

  // Add a new item to the list
  todos.push({ text: input.value, completed: false })

  // Save the list to local storage
  localStorage.setItem('todo-list', JSON.stringify(todos))

  // Clear the li's before we recreate them
  todoList.innerHTML = ''

  // Create and add new list items to the DOM
  todos.forEach(todo => {
    const li = document.createElement('li')
    li.textContent = todo.text
    todoList.append(li)
  })

  input.value = ''
})

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
todos.forEach(todo => {
  const li = document.createElement('li')
  li.textContent = todo.text
  todoList.append(li)
})