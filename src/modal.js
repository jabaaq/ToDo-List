const modalBox = document.querySelector('.modal-container')

function openModal() {
    modalBox.classList.add('show')
    modalBox.classList.remove('hide')
}

function closeModal() {
    modalBox.classList.remove('show')
    modalBox.classList.add('hide')
}


export { openModal, closeModal }
