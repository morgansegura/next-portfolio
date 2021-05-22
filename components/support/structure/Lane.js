import styles from './Lane.module.scss'

const Lane = ({
    children,
    className: givenClassName,
    buffer = true,
    ...props
}) => {
    let className = givenClassName
        ? givenClassName + ' ' + styles.lane
        : styles.lane

    return (
        <div className={className} {...props}>
            {buffer ? <div>{children}</div> : children}
        </div>
    )
}

export default Lane
