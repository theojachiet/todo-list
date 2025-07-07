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
console.log(projects.length);


if (projects.length === 0) {
    new Project('Perso');
}
// const project1 = new Project('project1');
// const project2 = new Project('project2');

// const test = new Task('test', 'description', '2003-07-18', 0);
// const task2 = new Task('task2', 'another task', '2024-07-18', 1);
// const task3 = new Task('task3', 'another task', '2025-07-07', 0);
// const task4 = new Task('task4', 'another task', '2004-08-23', 2);

// const task1project1 = new Task('task1project1', 'description', '2003-07-18', 0, 'project1');
// const task2project1 = new Task('task2project1', 'another task', '2024-07-18', 1, 'project1');
// const task3project1 = new Task('task3project1', 'another task', '2025-07-19', 0, 'project1');
// const task1project2 = new Task('task1project2', 'another task', '2004-08-23', 2, 'project2');

// task3.changeStatus();
// test.changeStatus();

//Populate arrays with localStorage
// if (!localStorage.getItem('tasks')) {
//     console.log('nothing in local storage');
// } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
// }


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
