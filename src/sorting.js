export function sortByPriority(array) {
    //New Array to keep the original task list intact
    const newArr = [...array];
    //Sort with high priority at the top (0 = low, 1 = medium, 2 = high)
    return newArr.sort((a, b) => b.priority - a.priority);
}

export function sortByStatus(array) {
    const newArr = [...array];
    //Sort by status (not done first) and then by due date (oldest first)
    return newArr.sort((a, b) => a.status - b.status || new Date(a.dueDate) - new Date(b.dueDate));
}

export function sortByDueDate(array) {
    const newArr = [...array];
    //Oldest first
    return newArr.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}