import { Task, Project } from './task';
import { addTaskstoProjects, manualReload, tasks, projects } from '.';
import { displayProjects, displayProjectSelect } from './DisplayDOM';
import { saveProjects } from './storage';

const DialogHandler = (function () {
    //Create Task buttons
    const addTaskButton = document.querySelector('.new-task');
    const taskDialog = document.querySelector('.task-dialog');
    const cancelTaskButton = document.querySelector('.task-dialog .close');
    // const createTaskButton = document.querySelector('.task-dialog .submit');
    const createTaskForm = document.querySelector('.task-dialog form');
    const createProjectForm = document.querySelector('.project-dialog form');

    //Create Project Buttons
    const addProjectButton = document.querySelector('.new-project');
    const projectDialog = document.querySelector('.project-dialog');
    const cancelProjectButton = document.querySelector('.project-dialog .close');
    const createProjectButton = document.querySelector('.project-dialog .submit');

    //Task Creation Event Logic
    addTaskButton.addEventListener('click', () => {
        console.log('here');
        displayProjectSelect('.task-dialog #project-select');
        taskDialog.showModal();
    });

    cancelTaskButton.addEventListener('click', (event) => {
        event.preventDefault();
        taskDialog.close();
    });

    createTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        taskDialog.close();


        const inputTaskName = document.querySelector('#task-name').value;
        const inputTaskDescription = document.querySelector('#task-description').value;
        const inputDueDate = document.querySelector('#due-date').value;
        const inputPriority = document.querySelector('#priority').value;
        const inputProject = document.querySelector('#project-select').value;


        new Task(inputTaskName, inputTaskDescription, inputDueDate, Number(inputPriority), inputProject);
        addTaskstoProjects();
        saveProjects(projects);
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

    createProjectForm.addEventListener('submit', (event) => {
        const inputProjectName = document.querySelector('#project-name').value;

        event.preventDefault();
        projectDialog.close();

        new Project(inputProjectName, []);
        displayProjects(projects.length - 1);
    })

    //Task Info Event Logic
    const taskInfoDialog = document.querySelector('.task-info-dialog');
    const taskInfoCancelButton = document.querySelector('.task-info-dialog .close');

    taskInfoCancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        taskInfoDialog.close();
    });
})();

export { DialogHandler };