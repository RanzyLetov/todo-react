import styles from './Field.module.scss';

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
        <div className={`${className} ${styles.field}`}>
            <label
                className={styles.label}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className={`${styles.input} ${error ? styles.isInvalid : ''}`}
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
                    className={styles.error}
                    title={error}
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default Field;