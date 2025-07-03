import { displayTasks } from "./DisplayDOM";
import { sortByStatus } from "./sorting";
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
    displayTasks(sortByStatus(tasks));
}

export {setupListeners};