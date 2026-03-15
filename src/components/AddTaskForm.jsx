import Field from "./Field.jsx";
import Button from "./Button.jsx";

const AddTaskForm = () => {
    return (
        <form className="todo__form">
            <Field id="new-task" label="New task" className="todo__field" />
            <Button className="button" type="submit">Add</Button>
        </form>
    )
}

export default AddTaskForm;