let tasksArr = []

export function displayToDo() {
    //Create the display card for the display DOM 
    const project = document.querySelector('.page-grid')
    const addedTask = document.createElement('div')
    addedTask.classList.add('added-task')


    // Data from localStorage
    let Title = localStorage.getItem('Title')
    let Description = localStorage.getItem('Description')
    let DueDate = localStorage.getItem('DueDate')


    let _displayArray = { Title, Description, DueDate }
    tasksArr.push(_displayArray)
    console.log(tasksArr, 'This is a new array!');
    console.log(_displayArray);

    tasksArr.forEach((task, index) => {
        addedTask.innerHTML = `
        <div class="task-information">
                        <input type="checkbox" data-index='${index}' class="task-checkbox">
                        <div class="task-inf">
                            <h3 class="task-title">${task.Title}</h3>
                            <p class="task-description">${task.Description}</p>
                            <p class="task-dueDate">${(task.DueDate).replace(/-/g, '/')}</p>
                        </div>
                    </div>
                    <button class="remove-btn" data-index='${index}'>Delete</button>
`
        project.appendChild(addedTask)

        const removeBtns = document.querySelectorAll('.remove-btn')
        removeBtns.forEach(btn => {
            btn.addEventListener('click', removeTask)
        })
    })
}



function removeTask(e) {
    const index = e.target.getAttribute('data-index')
    tasksArr.splice(index, 1)
    console.log('Deleted!');
    e.target.parentNode.remove();
}

