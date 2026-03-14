import Button from "./Button.jsx";

const TodoInfo = () => {
    return (
        <div className="todo__info">
            <div className="todo__total-tasks">Total tasks: <span>0</span></div>
            <Button className="todo__delete-all-button" label="Delete all" type="button" />
        </div>
    )
}

export default TodoInfo;