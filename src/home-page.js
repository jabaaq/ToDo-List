
const createHomePage = () => {
    const openedTab = document.querySelector('.opened-tab-content')
    const tabHeader = document.createElement('div')
    tabHeader.classList.add('tab-header')
    tabHeader.textContent = `Home`
    const addTaskBtn = document.createElement('button')
    addTaskBtn.classList.add('add-task-btn')
    addTaskBtn.innerHTML = `+Add Task`

    openedTab.appendChild(tabHeader)
    openedTab.appendChild(addTaskBtn)
}



// let moduleEvents = (function () {
//     const addTaskBtn = document.querySelector('.add-task-btn'),
//         closeModalBtn = document.querySelector('.close-btn');
//     console.log(closeModal);

//     addTaskBtn.addEventListener('click', () => {
//         openModal()
//     })
// }())

export { createHomePage }