import { useState, useEffect, useRef, useCallback, createContext, useMemo } from 'react';

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
    const { children } = props;

    const localStorageKey = "tasks"

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem(localStorageKey);

        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        return [];
    });

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const newTaskInputRef = useRef(null);
    const firstIncompleteTaskRef = useRef(null);
    const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure you want to delete all?');
        if (isConfirmed) {
            setTasks([]);
        }
    }, [])

    const deleteTask = useCallback((taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
        console.log(tasks.filter((task) => task.id !== taskId));
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {
        console.log(taskId, isDone);
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        isDone: !task.isDone,
                    }
                }
                return task;
            })
        )
    }, [tasks])

    const addTask = useCallback(() => {

        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTaskTitle('');
            setSearchQuery('');
        }
        newTaskInputRef.current.focus();
    }, [newTaskTitle]);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    }, [tasks])

    useEffect(() => {
        newTaskInputRef.current.focus();
    }, [])

    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase();
        return clearSearchQuery.length > 0
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks]);

    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteAllTasks,
                deleteTask,
                toggleTaskComplete,

                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}