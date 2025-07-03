const tasks = [];
const projects = [];

class Task {
    constructor(title, description, dueDate, priority, project = 'perso', status = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project; //Maybe could be the [0] in a project array by default ?
        this.status = status;
    }

    addTask() {
        tasks.push(this);
    }

    changeStatus() {
        this.status = !this.status;
    }

    getStatus = () => this.status;
}

class Project {
    constructor(name) {
        this.name = name;
    }

    addTaskToProject(Task) {
        projects.push(Task);
    }

    removeTaskFromProject(Task) {
        if (projects.includes(Task)) {
            projects.splice(projects.indexOf(Task), 1);
        } else {
            console.log('Error : task not in project');
        }
    }
}

export {Task, Project, tasks, projects};