//Importing Images
import radioboxBlank from './images/radiobox-blank.svg';
import checkCircle from './images/check-circle.svg';
import priorityHigh from './images/alert-circle-high.svg';
import priorityMedium from './images/alert-circle-medium.svg';
import priorityLow from './images/alert-circle-low.svg';
import deleteIcon from './images/trash-can.svg';

import { displayTasks } from "./DisplayDOM";
import { sortByDueDate, sortByPriority, sortByStatus } from "./sorting";
import { tasks, projects } from "./task";

const container = document.querySelector('section');

function setupListeners() {
    //Sorting Buttons
    const sortByDueDateButton = document.querySelector('.sort-options .due-date');
    const sortByPriorityButton = document.querySelector('button.priority');
    const sortByStatusButton = document.querySelector('button.status');

    sortByDueDateButton.addEventListener('click', displayByDate);
    sortByPriorityButton.addEventListener('click', displayByPriority);
    sortByStatusButton.addEventListener('click', displayByStatus);

    //Change Status of Task
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

    //Display delete button when hover
    const lines = [...document.querySelectorAll('.line')];

    lines.forEach(line => line.addEventListener('mouseenter', () => {
        const deleteButton = line.querySelector('.delete-task');
        if (!deleteButton) return;
        deleteButton.classList.remove('invisible');

        //Delete the element
        deleteButton.addEventListener('click', () => {
            const id = deleteButton.dataset.id;
            const index = tasks.findIndex(task => task.id === id);
            if (index === -1) return;
            
            tasks.splice(index, 1);
            line?.remove();
        })
    }));
    //And remove it when mouse is not over
    lines.forEach(line => line.addEventListener('mouseleave', () => {
        const deleteButton = line.querySelector('.delete-task');
        if (!deleteButton) return;
        deleteButton.classList.add('invisible');
    }));

    //Display specific project
    const projectsItems = [...document.querySelectorAll('.project-item')];
    projectsItems.forEach(project => project.addEventListener('click', () => {
        console.log('project');
    }));
}

//Sorting Functions
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