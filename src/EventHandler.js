//Importing Images
import radioboxBlank from './images/radiobox-blank.svg';
import checkCircle from './images/check-circle.svg';
import priorityHigh from './images/alert-circle-high.svg';
import priorityMedium from './images/alert-circle-medium.svg';
import priorityLow from './images/alert-circle-low.svg';

import { displayTasks } from "./DisplayDOM";
import { sortByDueDate, sortByPriority, sortByStatus } from "./sorting";
import { tasks } from "./task";

const container = document.querySelector('section');

function setupListeners() {
    //Sorting Buttons
    const sortByDueDateButton = document.querySelector('.sort-options .due-date');
    const sortByPriorityButton = document.querySelector('button.priority');
    const sortByStatusButton = document.querySelector('button.status');

    sortByDueDateButton.addEventListener('click', displayByDate);
    sortByPriorityButton.addEventListener('click', displayByPriority);
    sortByStatusButton.addEventListener('click', displayByStatus);

    //Check each task button pressed
    const checkboxButton = [...document.querySelectorAll('.task img')];
    checkboxButton.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const task = tasks.find(t => t.id === id);
            if (!task) return;
            task.changeStatus();
            if (task.status) {
                btn.src = checkCircle;
            } else {
                btn.src = radioboxBlank;
            }
        })
    })
}

function displayByStatus() {
    container.textContent = '';

    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Sorted By Status';

    displayTasks(sortByStatus(tasks));
    setupListeners();
}

function displayByDate() {
    container.textContent = '';

    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Sorted By Due Date';

    displayTasks(sortByDueDate(tasks));
    setupListeners();
}

function displayByPriority() {
    container.textContent = '';

    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Sorted By Priority';

    displayTasks(sortByPriority(tasks));
    setupListeners();
}

export { setupListeners };