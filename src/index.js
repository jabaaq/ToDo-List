import { createToDo } from "./create-to-do"
import pageLoad from "./pageLoad"
import { openModal, closeModal, clearForm, checkForm } from "./modal"

pageLoad()

//Click events for modal
const modalContainer = document.querySelector('.modal-container')
const openModalBtn = document.querySelector('.add-task-btn')
const closeModalBtn = document.querySelector('#close-btn')
const submitBtn = document.querySelector('#submit-btn')

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


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createToDo()
    checkForm()
})



