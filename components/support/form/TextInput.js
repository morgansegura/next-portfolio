import Text from '@support/typography/Text'
import styles from './TextInput.module.scss'

const TextInput = ({ className: givenClassName, type, error, ...props }) => {
    const hasError = error && error.length
    const className = givenClassName
        ? styles.container + ' ' + givenClassName
        : styles.container

    return (
        <label className={className}>
            <input
                type={type || 'text'}
                className={`${styles.input} ${
                    hasError ? styles.inputError : ''
                }`}
                {...props}
            />

            {hasError ? (
                <Text size={200} className={styles.error}>
                    {error}
                </Text>
            ) : null}
        </label>
    )
}

export default TextInput
