import { compareAsc, format, parseISO, startOfToday } from "date-fns";


//Creating an array for toDo
let toDoArr = []


// Factory function to create todo list
const createToDo = () => {
    let Title = document.querySelector('#title').value,
        Description = document.querySelector('#description').value,
        DueDate = document.querySelector('#dueDate').value;


    if (Title == '' || Description == '' || DueDate == '') {
        alert('Title, Description and Due Date are required fields, please try again!')
    }

    if (parseISO(DueDate) < startOfToday()) {
        alert('The date you entered is already passed, please try again!')
        return
    }

    console.log('Called createToDo module.. Creating toDo now');
    console.log({ Title, Description, DueDate });
    console.log('Pushing this object to the toDoArr');
    toDoArr.push({ Title, Description, DueDate })
    console.log(toDoArr);

    return {
        Title,
        Description,
        DueDate,
    }
}

export { createToDo }