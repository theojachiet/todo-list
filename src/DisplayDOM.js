//Importing Images
import radioboxBlank from './images/radiobox-blank.svg';
import checkCircle from './images/check-circle.svg';
import priorityHigh from './images/alert-circle-high.svg';
import priorityMedium from './images/alert-circle-medium.svg';
import priorityLow from './images/alert-circle-low.svg';

import { Task, Project, tasks, projects } from './task';

const container = document.querySelector('section');

export function displayTasks(array) {
    for (let task of array) {
        //task container
        const line = document.createElement('div');
        line.classList.add('line');

        //Second level containers
        const main = document.createElement('div');
        main.classList.add('main');
        const dueDate = document.createElement('p');
        dueDate.classList.add('due-date');
        dueDate.textContent = task.dueDate;

        //third level containers
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        const priority = document.createElement('div');
        priority.classList.add('priority');

        //content
        //Task title and status (+ project)
        const checkbox = document.createElement('img');
        if (task.status) {
            checkbox.src = checkCircle;
        } else {
            checkbox.src = radioboxBlank;
        }
        const taskTitle = document.createElement('h2');
        taskTitle.textContent = task.title;
        if (task.Project) {
            const taskProject = document.createElement('p');
            taskProject.textContent = `( ${task.Project} )`;
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

        //Appending to containers
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskTitle);
        if (task.Project) {
            taskContainer.appendChild(taskProject);
        }

        priority.appendChild(priorityIcon);

        main.appendChild(taskContainer);
        main.appendChild(priority);

        line.appendChild(main);
        line.appendChild(dueDate);

        container.appendChild(line);
    }
}

function displayProjects(projects) {

}