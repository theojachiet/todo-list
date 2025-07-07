import { tasks, projects } from '.';
import { loadProjects, saveProjects } from './storage';

class Task {
    constructor(title, description, dueDate, priority, project, status = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project; //Maybe could be the [0] in a project array by default ?
        this.status = status;
        this.id = crypto.randomUUID();
        tasks.push(this);
        // const projectObject = projects.find(pro => pro.name === this.project);
        // projectObject.list.push(this);
        // saveProjects(projects);
    }

    addTask() {
        tasks.push(this);
    }

    changeStatus() {
        //Removing and adding back the task to update the project list
        const projectObject = projects.find(pro => pro.name === this.project);
        projectObject.removeTaskFromProject(this);

        this.status = !this.status;

        projectObject.addTaskToProject(this);
        saveProjects(projects);
    }

    getStatus = () => this.status;
}

class Project {
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.list = [];
        projects.push(this);
        saveProjects(projects);
    }

    addTaskToProject(Task) {
        this.list.push(Task);
    }

    removeTaskFromProject(Task) {
        if (this.list.includes(Task)) {
            this.list.splice(this.list.indexOf(Task), 1);
        } else {
            console.log('Error : task not in project');
        }
    }
}

export { Task, Project, tasks, projects };