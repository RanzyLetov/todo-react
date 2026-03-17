import Field from "./Field.jsx";
import Button from "./Button.jsx";

const AddTaskForm = (props) => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        addTask()
    }

    return (
        <form
            className="todo__form"
            onSubmit={onSubmit}
        >
            <Field
                id="new-task"
                label="New task"
                className="todo__field"
                value={newTaskTitle}
                onInput={(event) => setNewTaskTitle(event.target.value)}
                ref={newTaskInputRef}
            />
            <Button className="button" type="submit">Add</Button>
        </form>
    )
}

export default AddTaskForm;