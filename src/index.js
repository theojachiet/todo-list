import './styles/reset.css';
import './styles/general-styling.css';
import './styles/nav.css';
import './styles/section.css';
import './styles/dialogs.css';


import { Project } from './task';
import { displayProjects } from './DisplayDOM';
import { setupListeners } from './EventHandler';
import { DialogHandler } from './DialogHandler'; // Necessary import to initialize the dialogHandler
import { loadProjects, saveProjects } from './storage';

//Initializing storage arrays
let projects = [];
let tasks = [];
projects = loadProjects();

if (projects.length === 0) {
    new Project('Perso', [], crypto.randomUUID());
}

//General utility function  belongs somewhere else but idk
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
addTaskstoProjects();

//Initial project display
displayProjects(0);

setupListeners();

//Trigger sorting on page load to display tasks
function manualReload() {
    const reload = document.querySelector('.due-date');
    reload.click();
}
manualReload();

export { manualReload, tasks, projects };
