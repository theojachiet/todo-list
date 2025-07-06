//Importing Images
import radioboxBlank from './images/radiobox-blank.svg';
import checkCircle from './images/check-circle.svg';
import priorityHigh from './images/alert-circle-high.svg';
import priorityMedium from './images/alert-circle-medium.svg';
import priorityLow from './images/alert-circle-low.svg';
import deleteIcon from './images/trash-can.svg';

import { displayTasks, populateTaskInfoDialog } from "./DisplayDOM";
import { sortByDueDate, sortByPriority, sortByStatus } from "./sorting";
import { tasks, projects, Task } from "./task";
import { DialogHandler } from './DialogHandler';
import { manualReload } from '.';


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
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
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

    //Display delete button when hover on Task
    const lines = [...document.querySelectorAll('.line')];

    lines.forEach(line => line.addEventListener('mouseenter', () => {
        const deleteButton = line.querySelector('.delete-task');
        if (!deleteButton) return;
        deleteButton.classList.remove('invisible');

        //Delete the element
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = deleteButton.dataset.id;
            const targetTask = tasks.find(task => task.id === id);
            if (!targetTask) return;

            const taskProject = projects.find(proj => proj.name === targetTask.project);
            const index = tasks.findIndex(task => task.id === id);
            if (index === -1) return;

            taskProject.removeTaskFromProject(targetTask);
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

    //Display Delete Button when Hover on Project
    const displayedProjects = [...document.querySelectorAll('.project-item')];

    displayedProjects.forEach(displayedProject => displayedProject.addEventListener('mouseenter', () => {
        const deleteButton = displayedProject.querySelector('.delete-project');
        if (!deleteButton) return;
        deleteButton.classList.remove('invisible');

        //Delete the element
        deleteButton.addEventListener('click', () => {
            const id = deleteButton.dataset.id;
            const targetProject = projects.find(project => project.id === id);
            if (!targetProject) return;

            const index = projects.findIndex(project => project.id === id);
            if (index === -1) return;

            //Delete the tasks from this project
            deleteTasksOfProject(targetProject);
            projects.splice(index, 1);
            displayedProject?.remove();
        })
    }));
    //And remove it when mouse is not over
    displayedProjects.forEach(displayedProject => displayedProject.addEventListener('mouseleave', () => {
        const deleteButton = displayedProject.querySelector('.delete-project');
        if (!deleteButton) return;
        deleteButton.classList.add('invisible');
    }));

    //Display specific project
    document.querySelector('.projects-list').addEventListener('click', displayByProject);

    //Create Task info Buttons
    const infoDialog = document.querySelector('.task-info-dialog');
    const taskInfoButton = [...document.querySelectorAll('.line')];
    taskInfoButton.forEach(task => {
        task.addEventListener('click', () => {
            //Finding the task object corresponding to the task DOM element
            const DOMTaskid = task.dataset.id;
            const targetTask = tasks.find(task => DOMTaskid === task.id);
            populateTaskInfoDialog(targetTask);
            infoDialog.showModal();

            //Handle Changing status
            const inputCheckbox = document.querySelector('.task-info-dialog .status img');
            inputCheckbox.addEventListener('click', () => {
                targetTask.status = !targetTask.status;
                targetTask.status ? inputCheckbox.src = checkCircle : inputCheckbox.src = radioboxBlank;
            })

            //Handle submitting
            const taskInfoSubmitButton = document.querySelector('.task-info-dialog .submit');
            taskInfoSubmitButton.addEventListener('click', (e) => {
                const inputPriority = document.querySelector('.task-info-dialog #priority').value;
                targetTask.priority = Number(inputPriority);

                e.preventDefault();
                infoDialog.close();
                manualReload();
            })

        })
    });
}

function displayByProject(e) {
    const btn = e.target.closest('.project-item');
    if (!btn) return;

    const id = btn.dataset.id;
    const project = projects.find(project => project.id === id);
    if (!project) return;

    container.textContent = '';

    const title = document.createElement('h1');
    title.textContent = project.name;
    container.appendChild(title);

    displayTasks(project.list);
    setupListeners();
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

function deleteTasksOfProject(targetProject) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].project === targetProject.name) {
            tasks.splice(i, 1);
            i--;
        }
    }
}

export { setupListeners };