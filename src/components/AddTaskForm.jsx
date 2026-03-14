import Field from "./Field.jsx";
import Button from "./Button.jsx";

const AddTaskForm = () => {
    return (
        <form className="todo__form">
            <Field id="new-task" label="New task" />
            <Button className="button" label="Add" type="submit" />
        </form>
    )
}

export default AddTaskForm;