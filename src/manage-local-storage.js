import { displayToDo } from "./dom-manip";

export function saveToLocalStorage({ Title, Description, DueDate }) {
    console.log('Saving object to local storage ...');
    localStorage.setItem('Title', document.getElementById('title').value)
    localStorage.setItem('Description', document.getElementById('description').value)
    localStorage.setItem('DueDate', document.getElementById('dueDate').value)
    displayToDo()
    return { Title, Description, DueDate }
}