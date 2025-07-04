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
        this.id = crypto.randomUUID();
        tasks.push(this);
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
        this.id = crypto.randomUUID();
        this.list = [];
        projects.push(this);
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

export {Task, Project, tasks, projects};