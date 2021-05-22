import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styles from './TextAreaInput.module.scss'

const TextAreaInput = ({
    className: givenClassName,
    primary,
    showCount,
    maxlength,
    value,
    ...props
}) => {
    const [focused, setFocused] = useState(false)

    const getCharacterCount = () => (showCount ? value.length : 0)
    let className =
        styles.textarea + (givenClassName ? ' ' + givenClassName : '')

    if (primary) {
        className += ' ' + styles.primary
    }

    return (
        <div className={styles.textareaContainer}>
            <TextareaAutosize
                maxLength={maxlength}
                className={className}
                {...props}
            />
            {showCount && (
                <div className={styles.count}>
                    {`${getCharacterCount()}/${maxlength}`}
                </div>
            )}
        </div>
    )
}

export default TextAreaInput
