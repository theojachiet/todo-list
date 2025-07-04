import { displayTasks } from "./DisplayDOM";
import { sortByDueDate, sortByPriority, sortByStatus } from "./sorting";
import { tasks } from "./task";

const container = document.querySelector('section');

function setupListeners() {
    const sortByDueDateButton = document.querySelector('.sort-options .due-date');
    const sortByPriorityButton = document.querySelector('button.priority');
    const sortByStatusButton = document.querySelector('button.status');

    sortByDueDateButton.addEventListener('click', displayByDate);
    sortByPriorityButton.addEventListener('click', displayByPriority);
    sortByStatusButton.addEventListener('click', displayByStatus);
}

function displayByStatus() {
    container.textContent = '';
    
    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Sorted By Status';

    displayTasks(sortByStatus(tasks));
}

function displayByDate() {
    container.textContent = '';

    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Sorted By Due Date';

    displayTasks(sortByDueDate(tasks));
}

function displayByPriority() {
    container.textContent = '';

    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Sorted By Priority';

    displayTasks(sortByPriority(tasks));
}

export { setupListeners };