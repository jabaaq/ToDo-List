
//Creating an array for toDo
let toDoArr = []

const createToDo = (Title, Description, DueDate) => {
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