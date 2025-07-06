import { Task, Project, tasks, projects } from './task';
import { addTaskstoProjects, manualReload } from '.';
import { displayProjects, displayProjectSelect } from './DisplayDOM';

const DialogHandler = (function () {
    //Create Task buttons
    const addTaskButton = document.querySelector('.new-task');
    const taskDialog = document.querySelector('.task-dialog');
    const cancelTaskButton = document.querySelector('.task-dialog .close');
    const createTaskButton = document.querySelector('.task-dialog .submit');

    //Create Project Buttons
    const addProjectButton = document.querySelector('.new-project');
    const projectDialog = document.querySelector('.project-dialog');
    const cancelProjectButton = document.querySelector('.project-dialog .close');
    const createProjectButton = document.querySelector('.project-dialog .submit');

    //Task Creation Event Logic
    addTaskButton.addEventListener('click', () => {
        displayProjectSelect();
        taskDialog.showModal();
    });

    cancelTaskButton.addEventListener('click', (event) => {
        event.preventDefault();
        taskDialog.close();
    });

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
        manualReload(); //Reload the display tasks to see the new task
    });

    //Project Creation Event Logic
    addProjectButton.addEventListener('click', () => {
        projectDialog.showModal();
    });

    cancelProjectButton.addEventListener('click', (event) => {
        event.preventDefault();
        projectDialog.close();
    });

    createProjectButton.addEventListener('click', (event) => {
        const inputProjectName = document.querySelector('#project-name').value;

        event.preventDefault();
        projectDialog.close();

        new Project(inputProjectName);
        displayProjects(projects.length - 1);
    })

    //Task Info Event Logic*
    const taskInfoDialog = document.querySelector('.task-info-dialog');
    const taskInfoCancelButton = document.querySelector('.task-info-dialog .close');
    const taskInfoSubmitButton = document.querySelector('.task-info-dialog .submit');

    taskInfoCancelButton.addEventListener('click', () => {
        taskInfoDialog.close();
    })
})();

export { DialogHandler };