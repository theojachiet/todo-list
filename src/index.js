import './styles/reset.css';
import './styles/general-styling.css';
import './styles/nav.css';
import './styles/section.css';

import {Task, Project, tasks, projects} from './task';
import { displayTasks } from './DisplayDOM';
import { sortByDueDate, sortByPriority, sortByStatus } from './sorting';

const test = new Task('test', 'description', '2025-07-18', 0);
const task2 = new Task('task2', 'another task', '2024-07-18', 1);
const task3 = new Task('task3', 'another task', '2025-07-19', 0);
const task4 = new Task('task4', 'another task', '2004-08-23', 2);

test.addTask();
task2.addTask();
task3.addTask();
task4.addTask();

task3.changeStatus();
test.changeStatus();

displayTasks(sortByPriority(tasks));
displayTasks(sortByStatus(tasks));
displayTasks(sortByDueDate(tasks));