import styles from './CheckboxInput.module.scss'

const CheckboxInput = ({
    className: givenClassName,
    primary,
    label,
    onChange,

    ...props
}) => {
    let className =
        styles.checkbox + (givenClassName ? ' ' + givenClassName : '')

    if (primary) {
        className += ' ' + styles.primary
    }

    return (
        <label className={className}>
            <div className={styles.checkboxInput} role="button" tabIndex={0}>
                <input
                    type="checkbox"
                    value={props.name}
                    onChange={onChange}
                    {...props}
                />
                <svg
                    className={styles.check}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                >
                    <title>check</title>
                    <g>
                        <path d="M10.293,1.293,4,7.586,1.707,5.293A1,1,0,0,0,.293,6.707l3,3a1,1,0,0,0,1.414,0l7-7a1,1,0,0,0-1.414-1.414Z"></path>
                    </g>
                </svg>
            </div>
            {label}
        </label>
    )
}

export default CheckboxInput
