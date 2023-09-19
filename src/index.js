import { createToDo } from "./create-to-do"
import pageLoad from "./pageLoad"
import { clearForm, checkForm } from "./modal"

pageLoad()

//Click events for modal

const submitBtn = document.querySelector('#submit-btn')
submitBtn.addEventListener('click', () => {
    const isFormFilled = checkForm()

    if (isFormFilled) {
        createToDo()
        clearForm()
    } else {
        alert('No!')
    }
})

const clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', () => {
    clearForm()
})








