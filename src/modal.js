import { compareAsc, format, parseISO, startOfToday } from "date-fns";
let title = document.querySelector('#title'),
    description = document.querySelector('#description'),
    dueDate = document.querySelector('#dueDate');

const modalBox = document.querySelector('.modal-container')

function openModal() {
    modalBox.classList.add('show')
    modalBox.classList.remove('hide')
}

function closeModal() {
    modalBox.classList.remove('show')
    modalBox.classList.add('hide')
}


//Function to clear form
function clearForm() {

    if (title.value !== '' && dueDate.value !== '' && parseISO(dueDate.value) >= startOfToday()) {
        title.value = ''
        description.value = ''
        dueDate.value = ''
    }
}

//Function to check form
function checkForm() {
    if (parseISO(dueDate.value) >= startOfToday()) {
        openModal()
        closeModal()
        clearForm()
    } else {
        clearForm()
        openModal()
    }
}

export { openModal, closeModal, clearForm, checkForm }
