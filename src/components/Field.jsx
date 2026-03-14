const Field = ({ id, label, type }) => {
    return (
        <div className="todo__field field">
            <label
                className="field__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="field__input"
                id={id}
                placeholder=" "
                autoComplete="off"
                type={type}
            />
        </div>
    )
}

export default Field;