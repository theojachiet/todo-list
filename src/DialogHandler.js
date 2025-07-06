const navbar = document.querySelector('nav');

const DialogHandler = (function() {
    const addTaskButton = document.querySelector('.new-task');
    const addProjectButton = document.querySelector('.new-project');
    const taskDialog = document.querySelector('.task-dialog');
    const projectDialog = document.querySelector('.project-dialog');

    addTaskButton.addEventListener('click', () => {
        taskDialog.showModal();
    })
})();

export {DialogHandler};