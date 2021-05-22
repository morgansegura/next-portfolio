import styles from './FormGroup.module.scss'

const FormGroup = ({ className: givenClassName, children, ...props }) => {
    const className = givenClassName
        ? styles.group + ' ' + givenClassName
        : styles.group

    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export default FormGroup
