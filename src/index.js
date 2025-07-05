import './styles/reset.css';
import './styles/general-styling.css';
import './styles/nav.css';
import './styles/section.css';

import {Task, Project, tasks, projects} from './task';
import { displayTasks, displayProjects } from './DisplayDOM';
import { setupListeners } from './EventHandler';

const persoProject = new Project('perso');
const project1 = new Project('project1');
const project2 = new Project('project2');

const test = new Task('test', 'description', '203-07-18', 0);
const task2 = new Task('task2', 'another task', '2024-07-18', 1);
const task3 = new Task('task3', 'another task', '2025-07-19', 0);
const task4 = new Task('task4', 'another task', '2004-08-23', 2);

const task1project1 = new Task('task1project1', 'description', '203-07-18', 0, 'project1');
const task2project1 = new Task('task2project1', 'another task', '2024-07-18', 1, 'project1');
const task3project1 = new Task('task3project1', 'another task', '2025-07-19', 0, 'project1');
const task1project2 = new Task('task1project2', 'another task', '2004-08-23', 2, 'project2');

task3.changeStatus();
test.changeStatus();

function addTaskstoProjects() {
    for (let project of projects) {
        for (let task of tasks) {
            if (task.project === project.name) {
                project.addTaskToProject(task);
            }
        }
    }
}
addTaskstoProjects();

displayProjects(projects);

setupListeners();


//Trigger sorting on page load to display tasks
const temp = document.querySelector('.due-date');
temp.click();