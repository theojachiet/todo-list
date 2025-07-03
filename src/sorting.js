import {Task, Project, tasks, projects} from './task';

export function sortByPriority(array) {
    //New Array to keep the original task list intact
    const newArr = [...array];
    //Sort with high priority at the top (0 = low, 1 = medium, 2 = high)
    return newArr.sort((a, b) => b.priority - a.priority);
}

export function sortByStatus(array) {
    const newArr = [...array];
    return newArr.sort((a, b) => b.status - a.status);
}