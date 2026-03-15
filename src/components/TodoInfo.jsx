import Button from "./Button.jsx";

const TodoInfo = (props) => {

    const {
        total,
        done,
    } = props;

    const hasTasks = total > 0;

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {done} from {total}
            </div>
            {hasTasks && (
                <Button className="todo__delete-all-button">
                    Delete all
                </Button>
            )}
        </div>
    )
}

export default TodoInfo;