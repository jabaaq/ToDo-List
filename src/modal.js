let title = document.querySelector('#title'),
    description = document.querySelector('#description'),
    dueDate = document.querySelector('#dueDate');



//Function to clear form
function clearForm() {
    title.value = ''
    description.value = ''
    dueDate.value = ''
}


function checkForm() {
    if (title.value !== '' && description.value !== '' && dueDate.value !== '') {
        return true
    } else {
        return false
    }
}


export { clearForm, checkForm }
