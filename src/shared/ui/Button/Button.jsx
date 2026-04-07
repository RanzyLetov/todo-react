import styles from './Button.module.scss'

const Button = (props) => {
    const {
        className = "",
        type = "button",
        onClick,
        children,
        isDisabled,
    } = props;
    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button;