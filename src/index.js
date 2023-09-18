import { createToDo } from "./create-to-do"
import pageLoad from "./pageLoad"
import { openModal, closeModal } from "./modal"
import { createHomePage } from "./home-page"

pageLoad()

//Click events for modal
const modalContainer = document.querySelector('.modal-container')
const openModalBtn = document.querySelector('.add-task-btn')
const closeModalBtn = document.querySelector('#close-btn')

openModalBtn.addEventListener('click', () => {
    openModal()
})

closeModalBtn.addEventListener('click', () => {
    closeModal();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
})

window.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
        closeModal()
    }
})


let myToDo = createToDo('Work', 'Work for 24/7', '9 / 18 / 2023')
console.log(myToDo);