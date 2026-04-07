const useTasksLocalStorage = () => {

    const localStorageKey = "tasks"

    const savedTasks = localStorage.getItem(localStorageKey);

    const saveTasks = (tasks) => {
        localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    }

    return {
        savedTasks: savedTasks ? JSON.parse(savedTasks) : null,
        saveTasks,
    }
}

export default useTasksLocalStorage;