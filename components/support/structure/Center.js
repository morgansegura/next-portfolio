import styles from './Center.module.scss'

const Center = ({ className: givenClassName, children, ...props }) => {
    const className = givenClassName
        ? styles.container + ' ' + givenClassName
        : styles.container

    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export default Center
