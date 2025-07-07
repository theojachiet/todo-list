import './styles/reset.css';
import './styles/general-styling.css';
import './styles/nav.css';
import './styles/section.css';
import './styles/dialogs.css';


import { Task, Project } from './task';
import { displayTasks, displayProjects } from './DisplayDOM';
import { setupListeners } from './EventHandler';
import { DialogHandler } from './DialogHandler';
import { loadProjects, saveProjects } from './storage';

let projects = [];
let tasks = [];
projects = loadProjects();


if (projects.length === 0) {
    new Project('Perso', [], crypto.randomUUID());
}


addTaskstoProjects();


export function addTaskstoProjects() {
    for (let project of projects) {
        project.list = [];
        for (let task of tasks) {
            if (project.list.includes(task)) continue;
            if (task.project === project.name) {
                project.addTaskToProject(task);
            }
        }
    }
}

displayProjects(0);

setupListeners();

//Trigger sorting on page load to display tasks
function manualReload() {
    const reload = document.querySelector('.due-date');
    reload.click();
};
manualReload();

export { manualReload, tasks, projects };
