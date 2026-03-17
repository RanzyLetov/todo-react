const Field = (props) => {
    const {
        id,
        label,
        type = 'text',
        className = "",
        value,
        onInput,
        ref,
    } = props;
    return (

    <div className={`${className} field`}>
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
                onInput={onInput}
                value={value}
                ref={ref}
            />
        </div>
    )
}

export default Field;