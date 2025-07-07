//Importing Images
import radioboxBlank from './images/radiobox-blank.svg';
import checkCircle from './images/check-circle.svg';
import priorityHigh from './images/alert-circle-high.svg';
import priorityMedium from './images/alert-circle-medium.svg';
import priorityLow from './images/alert-circle-low.svg';
import deleteIconImg from './images/trash-can.svg';
import folderImg from './images/folder.svg';

import { format, compareAsc, formatDistance } from 'date-fns';
import { projects } from '.';

const container = document.querySelector('section');
const projectContainer = document.querySelector('.projects-list');

export function displayTasks(array) {

    for (let task of array) {
        //task container
        const line = document.createElement('div');
        line.classList.add('line');
        line.dataset.id = task.id;

        //Second level containers
        const main = document.createElement('div');
        main.classList.add('main');
        const dueDate = document.createElement('p');
        dueDate.classList.add('due-date');
        dueDate.textContent = 'Due-date : ' + format(task.dueDate, 'do MMMM yyyy');
        const comparator = compareAsc(task.dueDate, new Date());
        if (comparator < 0) dueDate.style.color = 'orangered';

        //third level containers
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        const priority = document.createElement('div');
        priority.classList.add('priority');

        //content
        //Task title and status (+ project)
        const checkbox = document.createElement('img');
        checkbox.dataset.id = task.id;
        if (task.status) {
            checkbox.src = checkCircle;
        } else {
            checkbox.src = radioboxBlank;
        }
        const taskTitle = document.createElement('h2');
        taskTitle.textContent = task.title;
        const taskProject = document.createElement('p');
        if (task.project) {
            taskProject.textContent = `( ${task.project} )`;
        }

        //Priority
        const priorityIcon = document.createElement('img');
        if (task.priority === 2) {
            priorityIcon.src = priorityHigh;
        } else if (task.priority === 1) {
            priorityIcon.src = priorityMedium;
        } else {
            priorityIcon.src = priorityLow;
        }

        // Delete Icon
        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add('delete-task');
        deleteIcon.classList.add('invisible');
        deleteIcon.src = deleteIconImg;
        deleteIcon.dataset.id = task.id;

        //Appending to containers
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskTitle);
        if (task.project) {
            taskContainer.appendChild(taskProject);
        }

        priority.appendChild(priorityIcon);

        main.appendChild(taskContainer);
        main.appendChild(priority);
        main.appendChild(deleteIcon);

        line.appendChild(main);
        line.appendChild(dueDate);

        container.appendChild(line);
    }
}

export function displayProjects(index) {
    for (let i = index; i < projects.length; i++) {
        //Creating button container
        const projectItem = document.createElement('button');
        projectItem.classList.add('project-item');
        projectItem.dataset.id = projects[i].id;

        //Filling elements
        const folderImage = document.createElement('img');
        folderImage.src = folderImg;
        const projectName = document.createElement('p');
        projectName.textContent = projects[i].name;

        // Delete Icon
        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add('invisible');
        deleteIcon.classList.add('delete-project');
        deleteIcon.src = deleteIconImg;
        deleteIcon.dataset.id = projects[i].id;

        //Appending
        projectItem.appendChild(folderImage);
        projectItem.appendChild(projectName);
        projectItem.appendChild(deleteIcon);
        projectContainer.appendChild(projectItem);
    }
}

export function populateTaskInfoDialog(task) {
    const taskTitle = document.querySelector('.task-info-dialog h2');
    const taskDescription = document.querySelector('.task-info-dialog .description');
    const taskDueDate = document.querySelector('.task-info-dialog .due-date');

    const selectPriority = document.querySelector('.task-info-dialog #priority');
    const currentPriority = task.priority;

    const statusContainer = document.querySelector('.task-info-dialog .status');
    const statusIcon = document.createElement('img');
    const currentStatus = task.status;

    //Custom display priority default
    for (let i, j = 0; i = selectPriority.options[j]; j++) {
        if (i.value == currentPriority) {
            selectPriority.selectedIndex = j;
            break;
        }
    }

    //Custom display project
    displayProjectSelect('.task-info-dialog #project-select');
    const selectProject = document.querySelector('.task-info-dialog #project-select');
    const currentProject = task.project;

    for (let i, j = 0; i = selectProject.options[j]; j++) {
        if (i.value == currentProject) {
            selectProject.selectedIndex = j;
            break;
        }
    }

    //Custom display status
    statusContainer.textContent = 'Status : ';
    currentStatus ? statusIcon.src = checkCircle : statusIcon.src = radioboxBlank;
    statusContainer.appendChild(statusIcon);

    //Display Static content
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = format(task.dueDate, 'do MMMM yyyy');
    const distance = document.createElement('p');
    const comparator = compareAsc(task.dueDate, new Date());
    if (comparator < 0) {
        taskDueDate.style.color = 'orangered';
        distance.textContent = formatDistance(task.dueDate, new Date()) + ' ago';
    } else {
        taskDueDate.style.color = 'green';
        distance.textContent = 'In ' + formatDistance(task.dueDate, new Date());
    }
    distance.style.color = '#333';
    taskDueDate.appendChild(distance);
}


export function displayProjectSelect(selector) {
    const projectSelect = document.querySelector(selector);
    for (let i = 0; i < projects.length; i++) {
        if (projectSelect.options[i]) continue;
        projectSelect.options[projectSelect.options.length] = new Option(projects[i].name, projects[i].name);
    }
}