import styles from './Separator.module.scss'

const Separator = ({ className: givenClassName, ...props }) => {
    const className = givenClassName
        ? styles.separator + ' ' + givenClassName
        : styles.separator

    return <hr className={className} {...props} />
}

export default Separator
