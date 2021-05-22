import styles from './AnswerPanel.module.scss'

const AnswerPanel = ({
    id,
    label,
    isCorrect,
    isSelected,
    handleResponse,
    ...props
}) => {
    return (
        <div
            role="none"
            className={`${styles.panel} ${isSelected ? styles.focused : ''} ${
                isSelected && isCorrect ? styles.correct : ''
            } ${isSelected && !isCorrect ? styles.incorrect : ''}`}
            onClick={() => handleResponse(id)}
            {...props}
        >
            {label}
        </div>
    )
}

export default AnswerPanel
