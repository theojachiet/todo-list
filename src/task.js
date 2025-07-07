import { tasks, projects } from '.';
import { saveProjects } from './storage';

class Task {
    constructor(title, description, dueDate, priority, project, status = false, id = crypto.randomUUID()) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.status = status;
        this.id = id;
        tasks.push(this);
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

    changePriority(inputPriority) {
        //Removing and adding back the task to update the project list
        const projectObject = projects.find(pro => pro.name === this.project);
        projectObject.removeTaskFromProject(this);

        this.priority = inputPriority;

        projectObject.addTaskToProject(this);
        saveProjects(projects);
    }

    changeProject(inputProject) {
        //Removing and changing destination project to modify lists for both
        const initialProjectObject = projects.find(pro => pro.name === this.project);
        const destinationProjectObject = projects.find(pro => pro.name === inputProject);
        initialProjectObject.removeTaskFromProject(this);

        this.project = inputProject;

        destinationProjectObject.addTaskToProject(this);
        saveProjects(projects);
    }
}

class Project {
    constructor(name, list, id = crypto.randomUUID()) {
        this.name = name;
        this.list = list;
        this.id = id;
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