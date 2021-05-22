import { forwardRef } from 'react'
import styles from './Button.module.scss'

const Button = (
    {
        children,
        className: givenClassName,
        as: Tag = 'div',
        primary,
        white,
        grey,
        darkgrey,
        outline,
        large,
        ...props
    },
    ref,
) => {
    let className = styles.button + (givenClassName ? ' ' + givenClassName : '')

    if (primary) {
        className += ' ' + styles.primary
    } else if (white) {
        className += ' ' + styles.white
    } else if (grey) {
        className += ' ' + styles.grey
    } else if (darkgrey) {
        className += ' ' + styles.darkgrey
    }

    if (large) {
        className += ' ' + styles.large
    }

    if (outline) {
        className += ' ' + styles.outline
    }

    return (
        <Tag ref={ref} role="button" className={className} {...props}>
            {children}
        </Tag>
    )
}

export default forwardRef(Button)
