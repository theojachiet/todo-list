import { Task, Project, tasks, projects } from './task';
import { addTaskstoProjects, manualReload } from '.';
import { displayProjectSelect } from './DisplayDOM';

const navbar = document.querySelector('nav');

const DialogHandler = (function() {
    const addTaskButton = document.querySelector('.new-task');
    const addProjectButton = document.querySelector('.new-project');
    const taskDialog = document.querySelector('.task-dialog');
    const projectDialog = document.querySelector('.project-dialog');
    const cancelTaskButton = document.querySelector('.close-task');
    const createTaskButton = document.querySelector('.submit-task');

    addTaskButton.addEventListener('click', () => {
        displayProjectSelect();
        taskDialog.showModal();
    })

    cancelTaskButton.addEventListener('click', (event) => {
        event.preventDefault();
        taskDialog.close();
    })

    createTaskButton.addEventListener('click', (event) => {
        const inputTaskName = document.querySelector('#task-name').value;
        const inputTaskDescription = document.querySelector('#task-description').value;
        const inputDueDate = document.querySelector('#due-date').value;
        const inputPriority = document.querySelector('#priority').value;
        const inputProject = document.querySelector('#project-select').value;

        event.preventDefault();
        taskDialog.close();

        new Task(inputTaskName, inputTaskDescription, inputDueDate, Number(inputPriority), inputProject);
        addTaskstoProjects();
        manualReload();
        console.log(tasks.at(-1));
    })
})();

export {DialogHandler};