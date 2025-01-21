
const firstP = document.querySelector('p')
console.log(firstP)
// firstP.textContent = "Hello"

const nav = document.querySelector('nave')
nav.style.textDecoration = 'overline'


const contactA = document.querySelector('#contact')
contactA.computedStyleMap.backgroundColor = '#3388FF'

// const active = document.querySelector('section .active')
// console.log(active)
// active.computedStyleMap.textDecoration = 'underlien'

// document.body.style.backgroundColor = 'red'
document.titile = 'Charles webpage'

document.addEventListener('click', (e) => {
    // e.target.parentElement.style.border = '2px solid red'
    const section = e.target.closest('section')
    section.style.border = '2px solid red'
})

