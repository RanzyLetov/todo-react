const Field = (props) => {
    const {
        id,
        label,
        type = 'text',
        className = "",
        value,
        onInput,
        ref,
        error,
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
                className={`field__input ${error ? 'is-invalid' : ''}`}
                id={id}
                placeholder=" "
                autoComplete="off"
                type={type}
                onInput={onInput}
                value={value}
                ref={ref}
            />
            {error && (
                <span
                    className={'field__error'}
                    title={error}
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default Field;