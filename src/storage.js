import { displayProjectSelect } from "./DisplayDOM";
import { Project, Task } from "./task";

const STORAGE_KEY = 'todo-projects';

export function saveProjects(projectsArray) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsArray));
}

export function loadProjects() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    const parsed = JSON.parse(data);
    return parsed.map(project => restoreProject(project));
}

function restoreProject(obj) {
    const restoredTasks = obj.list.map(task => new Task(task.title, task.description, task.dueDate, task.priority, task.project, task.status));
    return new Project(obj.name, restoredTasks, obj.id);
}